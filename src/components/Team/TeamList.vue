<template>
  <div>
    <team-menu
      :items="teamMenuList"
      @toggle-active="toggleActive"
    />
    <team-slider
      :team="filteredTeam"
    />
  </div>
</template>

<script>
import TeamMenu from "./TeamMenu"
import TeamSlider from "./TeamSlider"

export default {
  name: "TeamList",
  components: {
    TeamMenu,
    TeamSlider
  },
  data() {
    return {
      currentActiveTeamMenu: 1,
      teamMenu: {
        1: {
          title: "All",
          id: 1,
          active: true
        },
        2: {
          title: "Webapps",
          id: 2,
          active: false
        },
        3: {
          title: "UI/UX",
          id: 3,
          active: false
        },
        4: {
          title: "Smart Data",
          id: 4,
          active: false
        }
      },
      team: [
        {
          id: 1,
          img: require('@/assets/team/photo_1.jpg'),
          name: "Thomas",
          groupId: [1, 2]
        },
        {
          id: 2,
          img: require('@/assets/team/photo_2.jpg'),
          name: "Jane",
          groupId: [1, 3]
        },
        {
          id: 3,
          img: require('@/assets/team/photo_3.jpg'),
          name: "John",
          groupId: [1, 3]
        },
        {
          id: 4,
          img: require('@/assets/team/photo_4.jpg'),
          name: "Alphared",
          groupId: [1, 2]
        },
        {
          id: 5,
          img: require('@/assets/team/photo_5.jpg'),
          name: "Alex",
          groupId: [1, 2]
        },
        {
          id: 6,
          img: require('@/assets/team/photo_6.jpg'),
          name: "Sam",
          groupId: [1, 2, 3, 4]
        }
      ]
    }
  },
  methods: {
    toggleActive (id) {
      this.updateActive(id)
      this.updateCurrent(id)
    },
    updateActive (id) {
      this.teamMenu[id].active = true
    },
    updateCurrent (id) {
      this.teamMenu[this.currentActiveTeamMenu].active = false
      this.currentActiveTeamMenu = id
    }
  },
  computed: {
    teamMenuList () {
      return Object.values(this.teamMenu)
    },
    filteredTeam() {
      return this.team.filter(item => item.groupId.includes(this.currentActiveTeamMenu))
    }
  }
}
</script>
