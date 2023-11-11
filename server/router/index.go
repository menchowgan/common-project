package router

func CreateRouter() GroupStruct {
	return GroupStruct{
		Group: GroupMap{
			// "/user": {
			// 	{
			// 		Url:     "/person-info-post", // 注册用户信息
			// 		Method:  http.MethodPost,
			// 		Handler: person.PersonInfoPost,
			// 	}, {
			// 		Url:        "/get-user-simple-info", // 首页获取用户简单信息 用于管理端
			// 		Method:     http.MethodGet,
			// 		Handler:    person.GerUserSimpleInfo,
			// 		Middleware: jwt.JwtMiddleware(),
			// 	},
			// },
		},
	}
}
