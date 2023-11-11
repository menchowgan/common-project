import { ref, computed } from "vue"
import { defineStore } from 'pinia';
import { UserModel, PhotoModel } from "../utils/interfaces"
import { UserManager } from "@/utils/managers"
import noData from '@/assets/images/no-data.png'

export const useUserInfoStore = defineStore("userinfo", () => {
  const userManager = new UserManager()
  const userInfo = ref<UserModel>({})

  const getUserInfo = async () => {
    const info = await userManager.getSimpleInfo()
    if (info) {
      userInfo.value = info as UserModel;
    }
  }

  const nickname = computed(() => userInfo.value?.nickname || "")

  const circleUrl = computed(() => userInfo.value?.avatar || "")

  const avatar = computed(() => userInfo.value?.avatar || noData)

  const photos = computed(() => {
    const photos: PhotoModel[] = [];
    if (userInfo.value.photos && userInfo.value.photos.length) {
      userInfo.value.photos.forEach((item, index) => {
        if (index < 6) {
          photos.push(item);
        }
      });
    }
    return photos
  })

  const userId = computed(() => userInfo.value?.id || 0)

  return {
    userInfo,
    getUserInfo,
    photos,
    nickname,
    circleUrl,
    userId,
    avatar
  }
})