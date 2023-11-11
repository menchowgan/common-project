interface ArticleSimpleInfoModel {
  id?: number
  userId?: number
  imgUrl?: string
  title?: string
  content?: string
  created_at?: string
  date?: string
  brief?: string 
  type?: string 
}

interface UserModel {
  id?: number
  nickname?: string
  gender?: string
  hobbies?: string
  fans?: number
  evaluate?: number
  brief?: string
  avatar?: string
  photos?: Array<PhotoModel>
  audios?: Array<MusicModel>
  videos?: Array<VideoModel>
  articleSimpleInfos?: Array<ArticleSimpleInfoModel>
  musics?: MusicModel[]
  article?: ArticleSimpleInfoModel
  video?: VideoModel,
  notes?: string[]
}

interface PhotoModel {
  id: number
  url: string
}

interface MusicModel {
  id?: number
  userId?: string | number
  avatar?: string
  audioUrl?: string
  title?: string
  artist?: string
  evalution?: string
  paused?: boolean
}

interface VideoModel {
  id?: number
  userId?: string | number
  avatar?: string
  videoUrl?: string
  title?: string
  artist?: string
  evalution?: string
  paused?: boolean
}

interface Plan {
  userId?: string | number
  content?: string
  done?: boolean
}

type InfoModel = ArticleSimpleInfoModel | MusicModel | PhotoModel

export type {
  ArticleSimpleInfoModel,
  UserModel,
  PhotoModel,
  MusicModel,
  VideoModel,
  InfoModel,
  Plan
}