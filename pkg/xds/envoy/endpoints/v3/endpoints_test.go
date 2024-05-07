package endpoints_test

import (
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	core_xds "github.com/kumahq/kuma/pkg/core/xds"
	util_proto "github.com/kumahq/kuma/pkg/util/proto"
	. "github.com/kumahq/kuma/pkg/xds/envoy/endpoints/v3"
)

var _ = Describe("Endpoints", func() {
	Describe("ClusterLoadAssignment()", func() {
		type testCase struct {
			cluster   string
			endpoints []core_xds.Endpoint
			expected  string
		}
		DescribeTable("should generate ClusterLoadAssignment",
			func(given testCase) {
				// when
				resource := CreateClusterLoadAssignment(given.cluster, given.endpoints)

				// then
				actual, err := util_proto.ToYAML(resource)

				Expect(err).ToNot(HaveOccurred())
				Expect(actual).To(MatchYAML(given.expected))
			},
			Entry("without tags", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{
					{
						Target: "192.168.0.1",
						Port:   8081,
						Weight: 2,
					},
					{
						Target: "192.168.0.2",
						Port:   8082,
						Weight: 1,
					},
				},
				expected: `
                clusterName: 127.0.0.1:8080
                endpoints:
                - lbEndpoints:
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.1
                          portValue: 8081
                    loadBalancingWeight: 2
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.2
                          portValue: 8082
                    loadBalancingWeight: 1
`,
			}),
			Entry("stable output", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{ // endpoints in different order, but result is the same as in previous test
					{
						Target: "192.168.0.2",
						Port:   8082,
						Weight: 1,
					},
					{
						Target: "192.168.0.1",
						Port:   8081,
						Weight: 2,
					},
				},
				expected: `
                clusterName: 127.0.0.1:8080
                endpoints:
                - lbEndpoints:
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.1
                          portValue: 8081
                    loadBalancingWeight: 2
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.2
                          portValue: 8082
                    loadBalancingWeight: 1
`,
			}),
			Entry("with tags", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{
					{
						Target: "192.168.0.1",
						Port:   8081,
						Tags:   map[string]string{"kuma.io/service": "backend", "region": "us"},
						Weight: 1,
					},
					{
						Target: "192.168.0.2",
						Port:   8082,
						Tags:   map[string]string{"kuma.io/service": "backend", "region": "eu"},
						Weight: 2,
					},
				},
				expected: `
                clusterName: 127.0.0.1:8080
                endpoints:
                - lbEndpoints:
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.1
                          portValue: 8081
                    metadata:
                      filterMetadata:
                        envoy.lb:
                          region: us
                        envoy.transport_socket_match:
                          region: us
                    loadBalancingWeight: 1
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.2
                          portValue: 8082
                    metadata:
                      filterMetadata:
                        envoy.lb:
                          region: eu
                        envoy.transport_socket_match:
                          region: eu
                    loadBalancingWeight: 2
`,
			}),
			Entry("with locality tags", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{
					{
						Target: "192.168.0.1",
						Port:   8081,
						Tags:   map[string]string{"kuma.io/service": "backend", "region": "us", "kuma.io/zone": "west"},
						Weight: 1,
					},
					{
						Target: "192.168.0.2",
						Port:   8082,
						Tags:   map[string]string{"kuma.io/service": "backend", "region": "eu", "kuma.io/zone": "west"},
						Weight: 2,
					},
				},
				expected: `
                clusterName: 127.0.0.1:8080
                endpoints:
                - lbEndpoints:
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.1
                          portValue: 8081
                    metadata:
                      filterMetadata:
                        envoy.lb:
                          region: us
                          kuma.io/zone: west
                        envoy.transport_socket_match:
                          region: us
                          kuma.io/zone: west
                    loadBalancingWeight: 1
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.2
                          portValue: 8082
                    metadata:
                      filterMetadata:
                        envoy.lb:
                          region: eu
                          kuma.io/zone: west
                        envoy.transport_socket_match:
                          region: eu
                          kuma.io/zone: west
                    loadBalancingWeight: 2
`,
			}),
			Entry("with proirity tag", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{
					{
						Target: "192.168.0.1",
						Port:   8081,
						Weight: 1,
					},
					{
						Target: "192.168.0.2",
						Port:   8082,
						Tags:   map[string]string{"kuma.io/priority": "10"},
						Weight: 1,
					},
				},
				expected: `
                clusterName: 127.0.0.1:8080
                endpoints:
                - lbEndpoints:
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.1
                          portValue: 8081
                    loadBalancingWeight: 1
                - priority: 10
                  lbEndpoints:
                  - endpoint:
                      address:
                        socketAddress:
                          address: 192.168.0.2
                          portValue: 8082
                    metadata:
                      filterMetadata:
                        envoy.lb:
                          kuma.io/priority: "10"
                        envoy.transport_socket_match:
                          kuma.io/priority: "10"
                    loadBalancingWeight: 1 
`,
 			}),
			Entry("mixed locality", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{
					{
						Target: "192.168.0.1",
						Port:   8081,
						Weight: 2,
						Locality: &core_xds.Locality{
							Zone: "west",
						},
					},
					{
						Target: "192.168.0.2",
						Port:   8082,
						Weight: 1,
					},
					{
						Target: "192.168.0.3",
						Port:   8082,
						Weight: 1,
					},
				},
				expected: `
clusterName: 127.0.0.1:8080
endpoints:
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.2
                    portValue: 8082
          loadBalancingWeight: 1
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.3
                    portValue: 8082
          loadBalancingWeight: 1
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.1
                    portValue: 8081
          loadBalancingWeight: 2
      locality:
        zone: west
`,
			}),
			Entry("mixed locality with locality weights", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{
					{
						Target: "192.168.0.1",
						Port:   8081,
						Weight: 2,
						Locality: &core_xds.Locality{
							Zone:     "west",
							Priority: 1,
							Weight:   1,
						},
					},
					{
						Target: "192.168.0.2",
						Port:   8082,
						Weight: 1,
						Locality: &core_xds.Locality{
							Zone:    "east",
							SubZone: "node1",
							Weight:  20,
						},
					},
					{
						Target: "192.168.0.3",
						Port:   8082,
						Weight: 1,
						Locality: &core_xds.Locality{
							Zone:    "east",
							SubZone: "node2",
							Weight:  1,
						},
					},
					{
						Target: "192.168.0.4",
						Port:   8082,
						Weight: 1,
						Locality: &core_xds.Locality{
							Zone:    "east",
							SubZone: "node2",
							Weight:  1,
						},
					},
				},
				expected: `
clusterName: 127.0.0.1:8080
endpoints:
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.2
                    portValue: 8082
          loadBalancingWeight: 1
      loadBalancingWeight: 20
      locality:
        subZone: node1
        zone: east
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.3
                    portValue: 8082
          loadBalancingWeight: 1
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.4
                    portValue: 8082
          loadBalancingWeight: 1
      loadBalancingWeight: 1
      locality:
        subZone: node2
        zone: east
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.1
                    portValue: 8081
          loadBalancingWeight: 2
      loadBalancingWeight: 1
      locality:
        zone: west
      priority: 1
`,
			}),
			Entry("mixed locality with priority", testCase{
				cluster: "127.0.0.1:8080",
				endpoints: []core_xds.Endpoint{
					{
						Target: "192.168.0.1",
						Port:   8081,
						Weight: 2,
						Locality: &core_xds.Locality{
							Zone:     "west",
							Priority: 1,
							Weight:   1,
						},
					},
					{
						Target: "192.168.0.2",
						Port:   8082,
						Weight: 1,
						Locality: &core_xds.Locality{
							Zone:    "east",
							SubZone: "node1",
							Weight:  20,
						},
					},
					{
						Target: "192.168.0.3",
						Port:   8082,
						Weight: 1,
						Locality: &core_xds.Locality{
							Zone:    "east",
							SubZone: "node1",
							Weight:  20,
						},
					},
					{
						Target: "192.168.0.4",
						Tags:   map[string]string{"kuma.io/priority": "10"},
						Port:   8082,
						Weight: 1,
						Locality: &core_xds.Locality{
							Zone:    "east",
							SubZone: "node2",
							Weight:  1,
						},
					},
					{
						Target: "192.168.0.5",
						Port:   8082,
						Weight: 1,
						Locality: &core_xds.Locality{
							Zone:    "east",
							SubZone: "node2",
							Weight:  1,
						},
					},
				},
				expected: `
clusterName: 127.0.0.1:8080
endpoints:
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.2
                    portValue: 8082
          loadBalancingWeight: 1
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.3
                    portValue: 8082
          loadBalancingWeight: 1
      loadBalancingWeight: 20
      locality:
        subZone: node1
        zone: east
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.4
                    portValue: 8082
          metadata:
            filterMetadata:
              envoy.lb:
                kuma.io/priority: "10"
              envoy.transport_socket_match:
                kuma.io/priority: "10"
          loadBalancingWeight: 1
      priority: 10
      loadBalancingWeight: 1
      locality:
        subZone: node2
        zone: east
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.5
                    portValue: 8082
          loadBalancingWeight: 1
      loadBalancingWeight: 1
      locality:
        subZone: node2
        zone: east
    - lbEndpoints:
        - endpoint:
            address:
                socketAddress:
                    address: 192.168.0.1
                    portValue: 8081
          loadBalancingWeight: 2
      loadBalancingWeight: 1
      locality:
        zone: west
      priority: 1
`,
			}),
		)
	})
})
