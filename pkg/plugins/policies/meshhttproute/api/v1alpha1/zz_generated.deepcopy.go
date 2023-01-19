//go:build !ignore_autogenerated
// +build !ignore_autogenerated

// Code generated by controller-gen. DO NOT EDIT.

package v1alpha1

import ()

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *BackendRef) DeepCopyInto(out *BackendRef) {
	*out = *in
	in.TargetRef.DeepCopyInto(&out.TargetRef)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new BackendRef.
func (in *BackendRef) DeepCopy() *BackendRef {
	if in == nil {
		return nil
	}
	out := new(BackendRef)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Filter) DeepCopyInto(out *Filter) {
	*out = *in
	if in.RequestHeaderModifier != nil {
		in, out := &in.RequestHeaderModifier, &out.RequestHeaderModifier
		*out = new(HeaderModifier)
		(*in).DeepCopyInto(*out)
	}
	if in.ResponseHeaderModifier != nil {
		in, out := &in.ResponseHeaderModifier, &out.ResponseHeaderModifier
		*out = new(HeaderModifier)
		(*in).DeepCopyInto(*out)
	}
	if in.RequestRedirect != nil {
		in, out := &in.RequestRedirect, &out.RequestRedirect
		*out = new(RequestRedirect)
		(*in).DeepCopyInto(*out)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Filter.
func (in *Filter) DeepCopy() *Filter {
	if in == nil {
		return nil
	}
	out := new(Filter)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *HeaderKeyValue) DeepCopyInto(out *HeaderKeyValue) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new HeaderKeyValue.
func (in *HeaderKeyValue) DeepCopy() *HeaderKeyValue {
	if in == nil {
		return nil
	}
	out := new(HeaderKeyValue)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *HeaderModifier) DeepCopyInto(out *HeaderModifier) {
	*out = *in
	if in.Set != nil {
		in, out := &in.Set, &out.Set
		*out = make([]HeaderKeyValue, len(*in))
		copy(*out, *in)
	}
	if in.Add != nil {
		in, out := &in.Add, &out.Add
		*out = make([]HeaderKeyValue, len(*in))
		copy(*out, *in)
	}
	if in.Remove != nil {
		in, out := &in.Remove, &out.Remove
		*out = make([]string, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new HeaderModifier.
func (in *HeaderModifier) DeepCopy() *HeaderModifier {
	if in == nil {
		return nil
	}
	out := new(HeaderModifier)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Match) DeepCopyInto(out *Match) {
	*out = *in
	if in.Path != nil {
		in, out := &in.Path, &out.Path
		*out = new(PathMatch)
		**out = **in
	}
	if in.Method != nil {
		in, out := &in.Method, &out.Method
		*out = new(Method)
		**out = **in
	}
	if in.QueryParams != nil {
		in, out := &in.QueryParams, &out.QueryParams
		*out = make([]QueryParamsMatch, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Match.
func (in *Match) DeepCopy() *Match {
	if in == nil {
		return nil
	}
	out := new(Match)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MeshHTTPRoute) DeepCopyInto(out *MeshHTTPRoute) {
	*out = *in
	in.TargetRef.DeepCopyInto(&out.TargetRef)
	if in.To != nil {
		in, out := &in.To, &out.To
		*out = make([]To, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MeshHTTPRoute.
func (in *MeshHTTPRoute) DeepCopy() *MeshHTTPRoute {
	if in == nil {
		return nil
	}
	out := new(MeshHTTPRoute)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PathMatch) DeepCopyInto(out *PathMatch) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PathMatch.
func (in *PathMatch) DeepCopy() *PathMatch {
	if in == nil {
		return nil
	}
	out := new(PathMatch)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *QueryParamsMatch) DeepCopyInto(out *QueryParamsMatch) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new QueryParamsMatch.
func (in *QueryParamsMatch) DeepCopy() *QueryParamsMatch {
	if in == nil {
		return nil
	}
	out := new(QueryParamsMatch)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RequestRedirect) DeepCopyInto(out *RequestRedirect) {
	*out = *in
	if in.Scheme != nil {
		in, out := &in.Scheme, &out.Scheme
		*out = new(string)
		**out = **in
	}
	if in.Hostname != nil {
		in, out := &in.Hostname, &out.Hostname
		*out = new(PreciseHostname)
		**out = **in
	}
	if in.Port != nil {
		in, out := &in.Port, &out.Port
		*out = new(PortNumber)
		**out = **in
	}
	if in.StatusCode != nil {
		in, out := &in.StatusCode, &out.StatusCode
		*out = new(int)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RequestRedirect.
func (in *RequestRedirect) DeepCopy() *RequestRedirect {
	if in == nil {
		return nil
	}
	out := new(RequestRedirect)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Rule) DeepCopyInto(out *Rule) {
	*out = *in
	if in.Matches != nil {
		in, out := &in.Matches, &out.Matches
		*out = make([]Match, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	in.Default.DeepCopyInto(&out.Default)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Rule.
func (in *Rule) DeepCopy() *Rule {
	if in == nil {
		return nil
	}
	out := new(Rule)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RuleConf) DeepCopyInto(out *RuleConf) {
	*out = *in
	if in.Filters != nil {
		in, out := &in.Filters, &out.Filters
		*out = new([]Filter)
		if **in != nil {
			in, out := *in, *out
			*out = make([]Filter, len(*in))
			for i := range *in {
				(*in)[i].DeepCopyInto(&(*out)[i])
			}
		}
	}
	if in.BackendRefs != nil {
		in, out := &in.BackendRefs, &out.BackendRefs
		*out = new([]BackendRef)
		if **in != nil {
			in, out := *in, *out
			*out = make([]BackendRef, len(*in))
			for i := range *in {
				(*in)[i].DeepCopyInto(&(*out)[i])
			}
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RuleConf.
func (in *RuleConf) DeepCopy() *RuleConf {
	if in == nil {
		return nil
	}
	out := new(RuleConf)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *To) DeepCopyInto(out *To) {
	*out = *in
	in.TargetRef.DeepCopyInto(&out.TargetRef)
	if in.Rules != nil {
		in, out := &in.Rules, &out.Rules
		*out = make([]Rule, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new To.
func (in *To) DeepCopy() *To {
	if in == nil {
		return nil
	}
	out := new(To)
	in.DeepCopyInto(out)
	return out
}