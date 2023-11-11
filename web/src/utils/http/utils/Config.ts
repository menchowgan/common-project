import { Method } from "axios"

export interface ConfigModel {
  url: string,
  method?: Method
}

const userRequests: Record<string, ConfigModel> = {
  "GET_USER_SIMPLE_INFO": {
    url: "/user/get-user-simple-info",
    method: "get"
  },
  "SEARCH_USER_BRIEF": {
    url: "/user/search-user-brief",
    method: "get"
  },
  "GET_INFO": {
    url: "/user/get",
    method: "get"
  },
  "SIMPLE_LIFE": {
    url: "/user/simple-life/{id}",
    method: 'post'
  },
  "POST_USER_INFO": {
    url: "/user/person-info-post",
    method: "post"
  },
}

const photoRequests: Record<string, ConfigModel> = {
  "AVATAR_UPLOAD": {
    url: "/photo/avatar/upload",
    method: "post"
  },
  "PHOTO_UPLOAD": {
    url: "/photo/user/photos/upload",
    method: "post"
  },
  "DELETE_UPLOAD": {
    url: "/photo/user/photos/delete",
    method: "delete"
  }
}

const musicRequests: Record<string, ConfigModel> = {
  "MUSIC_UPLOAD": {
    url: "/music/upload",
    method: "post"
  },
  "MUSIC_COVER_UPLOAD": {
    url: "/music/cover/upload",
    method: "post"
  },
  "MUSIC_USER_UPLOAD": {
    url: "/music/user/upload",
    method: "post"
  },
  "MUSIC_QUERY_BY_USERID": {
    url: "/music/query/{userId}",
    method: "post"
  },
}

const articleRequests: Record<string, ConfigModel> = {
  "ARTICLE_PHOTO_UPLOAD": {
    url: "/article/photo/upload",
    method: "post"
  },
  "ARTICLE_UPLOAD": {
    url: "/article/upload",
    method: "post"
  },
  "ARTICLE_QUERY": {
    url: "/article/query/{articleId}",
    method: "get"
  },
  "ARTICLE_QUERY_BY_TYPE": {
    url: "/article/query-by-type/{userid}/{type}",
    method: "get"
  },
  "ARTICLE_QUERY_BY_USERID": {
    url: "/article/query-by-userid/{userId}",
    method: "post"
  },
}

const videoRequests: Record<string, ConfigModel> = {
  "VIDEO_USER_UPLOAD": {
    url: "/video/user/upload",
    method: "post"
  },
  "VIDEO_QUERY_BY_USERID": {
    url: "/video/query/{userId}",
    method: "post"
  },
}

const planRequests: Record<string, ConfigModel> = {
  "PLAN_SUBMIT": {
    url: '/plan/submit',
    method: 'post'
  },
  "PLAN_SEARCH": {
    url: "/plan/search/{userId}",
    method: 'get'
  }
}

const weatherRequests: Record<string, ConfigModel> = {
  "WEATHER_GET": {
    url: import.meta.env.SL_GAODE_MAP_URL,
    method: 'get'
  },
  "GEO_LOC_GET": {
    url: import.meta.env.SL_LONG_LATI_URL,
    method: 'get'
  }
}

const CONFIG_METHODS: Record<string, ConfigModel> = {
  ...userRequests,
  ...photoRequests,
  ...musicRequests,
  ...articleRequests,
  ...videoRequests,
  ...planRequests,
  ...weatherRequests
}

export default CONFIG_METHODS;