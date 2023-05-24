import {defineStore} from 'pinia'

export const useCoursesStore = defineStore("coursesStore", {
    state: () => {
        return {
            server: "https://kitsu.io/api/edge/trending/anime?limit=9",
            courses: []
        }
    },
    actions: {
        getList: async function () {
            this.courses = await fetch(this.server).then((res) => res.json());
            this.courses = this.courses.data;
        }
    }

    //actions

    //getters
})