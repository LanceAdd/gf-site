"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["96027"],{285143:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u65E5\u5FD7\u8F93\u51FA","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u65E5\u5FD7\u8F93\u51FA"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027","permalink":"/2.2.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u7A7A\u8DD1\u7279\u6027"}}'),o=r("785893"),s=r("250065");let i={title:"ORM\u9AD8\u7EA7\u7279\u6027-\u5B57\u6BB5\u6620\u5C04",sidebar_position:2,hide_title:!0},c=void 0,d={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u91CD\u8981\u8BF4\u660E",id:"\u91CD\u8981\u8BF4\u660E",level:2},{value:"\u63A5\u53E3\u8BBE\u8BA1",id:"\u63A5\u53E3\u8BBE\u8BA1",level:3},{value:"\u5B57\u6BB5\u7F13\u5B58",id:"\u5B57\u6BB5\u7F13\u5B58",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function l(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u5BF9\u6570\u636E\u8FDB\u884C\u5199\u5165\u3001\u66F4\u65B0\u4F7F\u7528\u8BF8\u5982 ",(0,o.jsx)(n.code,{children:"Fields/Data/Scan"})," \u65B9\u6CD5\u65F6\uFF0C\u5982\u679C\u7ED9\u5B9A\u7684\u53C2\u6570\u4E3A ",(0,o.jsx)(n.code,{children:"map/struct"})," \u7C7B\u578B\uFF0C\u7ED9\u5B9A\u53C2\u6570\u7684\u952E\u540D/\u5C5E\u6027\u540D\u79F0\u5C06\u4F1A\u81EA\u52A8\u6309\u7167\u5FFD\u7565\u5927\u5C0F\u5199\u53CA\u7279\u6B8A\u5B57\u7B26\u7684\u65B9\u5F0F\u4E0E\u6570\u636E\u8868\u7684\u5B57\u6BB5\u8FDB\u884C\u81EA\u52A8\u8BC6\u522B\u6620\u5C04\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6570\u636E\u5E93\u7EC4\u4EF6\u6267\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u65F6\u4F1A\u51FA\u73B0 ",(0,o.jsx)(n.code,{children:"SHOW FULL COLUMNS FROM `xxx` "})," \u8BED\u53E5\u7684\u539F\u56E0\uFF0C\u8BE5\u8BED\u53E5\u6BCF\u5F20\u8868\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u968F\u540E\u7F13\u5B58\u7ED3\u679C\u5230\u5185\u5B58\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5339\u914D\u89C4\u5219\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Map\u952E\u540D     \u5B57\u6BB5\u540D\u79F0     \u662F\u5426\u5339\u914D\nnickname   nickname      match\nNICKNAME   nickname      match\nNick-Name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\nNickName   nickname      match\nNick-name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u91CD\u8981\u8BF4\u660E",children:"\u91CD\u8981\u8BF4\u660E"}),"\n",(0,o.jsx)(n.h3,{id:"\u63A5\u53E3\u8BBE\u8BA1",children:"\u63A5\u53E3\u8BBE\u8BA1"}),"\n",(0,o.jsxs)(n.p,{children:["\u8BE5\u7279\u6027\u9700\u8981\u4F9D\u9760 ",(0,o.jsx)(n.code,{children:"DB"})," \u4E2D\u5B9A\u4E49\u7684 ",(0,o.jsx)(n.code,{children:"TableFields"})," \u63A5\u53E3\u5B9E\u73B0\u6765\u652F\u6301\u7684\u3002\u5982\u679C\u4E0D\u5B9E\u73B0\u8BE5\u63A5\u53E3\uFF0C\u90A3\u4E48\u4E0A\u5C42\u4E1A\u52A1\u9700\u8981\u7EF4\u62A4\u5C5E\u6027/\u952E\u540D\u5230\u6570\u636E\u8868\u5B57\u6BB5\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u7EF4\u62A4\u8FD9\u79CD\u975E\u4E1A\u52A1\u903B\u8F91\u7684\u5DE5\u4F5C\u6210\u672C\u662F\u6BD4\u8F83\u5927\u7684\u3002\u6846\u67B6\u7684\u76EE\u6807\u662F\u5C3D\u53EF\u80FD\u8BA9\u4E1A\u52A1\u5F00\u53D1\u540C\u5B66\u7684\u7CBE\u529B\u805A\u7126\u4E8E\u4E1A\u52A1\uFF0C\u56E0\u6B64\u6846\u67B6\u7EC4\u4EF6\u4E2D\u80FD\u591F\u81EA\u52A8\u5316\u7684\u5730\u65B9\u5747\u91C7\u7528\u81EA\u52A8\u5316\u8BBE\u8BA1\u3002\u76EE\u524D\u5BF9\u63A5\u5230\u6846\u67B6\u7684 ",(0,o.jsx)(n.code,{children:"driver"})," \u5B9E\u73B0\u5747\u652F\u6301\u8BE5\u63A5\u53E3\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// TableFields retrieves and returns the fields' information of specified table of current\n// schema.\n//\n// The parameter `link` is optional, if given nil it automatically retrieves a raw sql connection\n// as its link to proceed necessary sql query.\n//\n// Note that it returns a map containing the field name and its corresponding fields.\n// As a map is unsorted, the TableField struct has an \"Index\" field marks its sequence in\n// the fields.\n//\n// It's using cache feature to enhance the performance, which is never expired util the\n// process restarts.\nfunc (db DB) TableFields(ctx context.Context, table string, schema ...string) (fields map[string]*TableField, err error)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u5B57\u6BB5\u7F13\u5B58",children:"\u5B57\u6BB5\u7F13\u5B58"}),"\n",(0,o.jsx)(n.p,{children:"\u6BCF\u4E2A\u6570\u636E\u8868\u7684\u5B57\u6BB5\u4FE1\u606F\uFF0C\u5C06\u5728\u6570\u636E\u8868\u7684\u7B2C\u4E00\u6B21\u64CD\u4F5C\u65F6\u6267\u884C\u67E5\u8BE2\u5E76\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\u3002\u5982\u679C\u9700\u8981\u624B\u52A8\u5237\u65B0\u5B57\u6BB5\u7F13\u5B58\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F9D\u9760\u4EE5\u4E0B\u65B9\u6CD5\u5B9E\u73B0\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// ClearTableFields removes certain cached table fields of current configuration group.\nfunc (c *Core) ClearTableFields(ctx context.Context, table string, schema ...string) (err error)\n\n// ClearTableFieldsAll removes all cached table fields of current configuration group.\nfunc (c *Core) ClearTableFieldsAll(ctx context.Context) (err error)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u65B9\u6CD5\u4ECB\u7ECD\u5982\u6CE8\u91CA\u3002\u53EF\u4EE5\u770B\u5230\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u662F\u6302\u8F7D ",(0,o.jsx)(n.code,{children:"Core"})," \u5BF9\u8C61\u4E0A\u7684\uFF0C\u800C\u5E95\u5C42\u7684 ",(0,o.jsx)(n.code,{children:"Core"})," \u5BF9\u8C61\u5DF2\u7ECF\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"DB"})," \u63A5\u53E3\u66B4\u9732\uFF0C\u56E0\u6B64\u6211\u4EEC\u8FD9\u4E48\u6765\u83B7\u53D6 ",(0,o.jsx)(n.code,{children:"Core"})," \u5BF9\u8C61\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"g.DB().GetCore()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A\u67E5\u8BE2\u7528\u6237\u57FA\u672C\u4FE1\u606F\u7684\u4E00\u4E2A\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u7528\u6237\u662F\u4E00\u4E2A\u533B\u751F\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["1\u3001\u6211\u4EEC\u6709\u4E24\u5F20\u8868\uFF0C\u4E00\u5F20 ",(0,o.jsx)(n.code,{children:"user"})," \u8868\uFF0C\u5927\u6982\u6709 ",(0,o.jsx)(n.code,{children:"30"})," \u4E2A\u5B57\u6BB5\uFF1B\u4E00\u5F20 ",(0,o.jsx)(n.code,{children:"doctor_user"})," \u8868\uFF0C\u5927\u6982\u6709 ",(0,o.jsx)(n.code,{children:"80"})," \u591A\u4E2A\u5B57\u6BB5\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["2\u3001 ",(0,o.jsx)(n.code,{children:"user"})," \u662F\u7528\u6237\u57FA\u7840\u8868\uFF0C\u5305\u542B\u7528\u6237\u7684\u6700\u57FA\u7840\u4FE1\u606F\uFF1B ",(0,o.jsx)(n.code,{children:"doctor_user"})," \u662F\u57FA\u4E8E ",(0,o.jsx)(n.code,{children:"user"})," \u8868\u7684\u4E1A\u52A1\u6269\u5C55\u8868\uFF0C\u7279\u5B9A\u7528\u6237\u89D2\u8272\u7684\u8868\uFF0C\u4E0E ",(0,o.jsx)(n.code,{children:"user"})," \u8868\u662F\u4E00\u5BF9\u4E00\u5173\u7CFB\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["3\u3001\u6211\u4EEC\u6709\u4E00\u4E2A ",(0,o.jsx)(n.code,{children:"GRPC"})," \u7684\u63A5\u53E3\uFF0C\u63A5\u53E3\u5B9A\u4E49\u662F\u8FD9\u6837\u7684\uFF08\u4E3A\u65B9\u4FBF\u6F14\u793A\uFF0C\u8FD9\u91CC\u505A\u4E86\u4E00\u4E9B\u7B80\u5316\uFF09\uFF1A"]}),"\n",(0,o.jsxs)(n.p,{children:["1\uFF09 ",(0,o.jsx)(n.code,{children:"GetDoctorInfoRes"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u67E5\u8BE2\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\ntype GetDoctorInfoRes struct {\n    UserInfo             *UserInfo   `protobuf:"bytes,1,opt,name=UserInfo,proto3" json:"UserInfo,omitempty"`\n    DoctorInfo           *DoctorInfo `protobuf:"bytes,2,opt,name=DoctorInfo,proto3" json:"DoctorInfo,omitempty"`\n    XXX_NoUnkeyedLiteral struct{}    `json:"-"`\n    XXX_unrecognized     []byte      `json:"-"`\n    XXX_sizecache        int32       `json:"-"`\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["2\uFF09 ",(0,o.jsx)(n.code,{children:"UserInfo"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u7528\u6237\u57FA\u7840\u4FE1\u606F\ntype UserInfo struct {\n    Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`\n    Avatar               string   `protobuf:"bytes,2,opt,name=avatar,proto3" json:"avatar,omitempty"`\n    Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`\n    Sex                  int32    `protobuf:"varint,4,opt,name=sex,proto3" json:"sex,omitempty"`\n    XXX_NoUnkeyedLiteral struct{} `json:"-"`\n    XXX_unrecognized     []byte   `json:"-"`\n    XXX_sizecache        int32    `json:"-"`\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["3\uFF09 ",(0,o.jsx)(n.code,{children:"DoctorInfo"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// \u533B\u751F\u4FE1\u606F\ntype DoctorInfo struct {\n    Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`\n    Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`\n    Hospital             string   `protobuf:"bytes,4,opt,name=hospital,proto3" json:"hospital,omitempty"`\n    Section              string   `protobuf:"bytes,6,opt,name=section,proto3" json:"section,omitempty"`\n    Title                string   `protobuf:"bytes,8,opt,name=title,proto3" json:"title,omitempty"`\n    XXX_NoUnkeyedLiteral struct{} `json:"-"`\n    XXX_unrecognized     []byte   `json:"-"`\n    XXX_sizecache        int32    `json:"-"`\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"4\u3001\u67E5\u8BE2\u63A5\u53E3\u5B9E\u73B0\u4EE3\u7801"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// \u67E5\u8BE2\u533B\u751F\u4FE1\u606F\nfunc (s *Service) GetDoctorInfo(ctx context.Context, req *pb.GetDoctorInfoReq) (res *pb.GetDoctorInfoRes, err error) {\n    // Protobuf\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\n    res = &pb.GetDoctorInfoRes{}\n    // \u67E5\u8BE2\u533B\u751F\u4FE1\u606F\n    // SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=xxx\n    err = dao.PrimaryDoctorUser.\n        Ctx(ctx).\n        Fields(res.DoctorInfo).\n        Where(dao.PrimaryDoctorUser.Columns.UserId, req.Id).\n        Scan(&res.DoctorInfo)\n    if err != nil {\n        return\n    }\n    // \u67E5\u8BE2\u57FA\u7840\u7528\u6237\u4FE1\u606F\n    // SELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=xxx\n    err = dao.PrimaryUser.\n        Ctx(ctx).\n        Fields(res.DoctorInfo).\n        Where(dao.PrimaryUser.Columns.Id, req.Id).\n        Scan(&res.UserInfo)\n    return res, err\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5F53\u6211\u4EEC\u8C03\u7528 ",(0,o.jsx)(n.code,{children:"GetDoctorInfo"})," \u6267\u884C\u67E5\u8BE2\u65F6\uFF0C\u5C06\u4F1A\u5411\u6570\u636E\u5E93\u53D1\u8D77\u4E24\u6761 ",(0,o.jsx)(n.code,{children:"SQL"})," \u67E5\u8BE2\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=1\nSELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=1\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF1A"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"Fields"})," \u65B9\u6CD5\u65F6\uFF0C\u53C2\u6570\u7C7B\u578B\u4E3A ",(0,o.jsx)(n.code,{children:"struct"})," \u6216\u8005 ",(0,o.jsx)(n.code,{children:"*struct"}),"\uFF0C ",(0,o.jsx)(n.code,{children:"ORM"})," \u5C06\u4F1A\u81EA\u52A8\u5C06 ",(0,o.jsx)(n.code,{children:"struct"})," \u7684\u5C5E\u6027\u540D\u79F0\u4E0E\u6570\u636E\u8868\u7684\u5B57\u6BB5\u540D\u79F0\u505A\u81EA\u52A8\u6620\u5C04\u5339\u914D\uFF0C\u5F53\u6620\u5C04\u5339\u914D\u6210\u529F\u65F6\u53EA\u4F1A\u67E5\u8BE2\u7279\u5B9A\u5B57\u6BB5\u6570\u636E\uFF0C\u800C\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u5B57\u6BB5\u5C06\u4F1A\u88AB\u81EA\u52A8\u8FC7\u6EE4\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"Scan"})," \u65B9\u6CD5\u65F6\uFF08\u4E5F\u53EF\u4EE5\u7528 ",(0,o.jsx)(n.code,{children:"Struct"}),"/ ",(0,o.jsx)(n.code,{children:"Structs"}),"\uFF09\uFF0C\u53C2\u6570\u7C7B\u578B\u4E3A ",(0,o.jsx)(n.code,{children:"*struct"})," \u6216\u8005 ",(0,o.jsx)(n.code,{children:"**struct"}),"\uFF0C\u67E5\u8BE2\u7ED3\u679C\u5C06\u4F1A\u81EA\u52A8\u4E0E ",(0,o.jsx)(n.code,{children:"struct"})," \u7684\u5C5E\u6027\u505A\u81EA\u52A8\u6620\u5C04\u5339\u914D\uFF0C\u5F53\u6620\u5C04\u5339\u914D\u6210\u529F\u65F6\u4F1A\u81EA\u52A8\u505A\u8F6C\u6362\u8D4B\u503C\uFF0C\u5426\u5219\u4E0D\u4F1A\u5BF9\u53C2\u6570\u7684\u5C5E\u6027\u505A\u4EFB\u4F55\u5904\u7406\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let o={},s=t.createContext(o);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);