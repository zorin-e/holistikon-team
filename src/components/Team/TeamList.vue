<template>
  <div :class="$style.wrapper">
    <team-menu
      :items="teamMenuList"
      @toggle-active="toggleActive"
    />
    <team-slider
      :class="isModalTeamMember && $style.hidden"
      :team="filteredTeam"
      @show-member="showMember"
    />
    <transition name="slide-left">
      <team-member
        v-if="isModalTeamMember"
        :class="$style.teamMember"
        :member="currentMember"
        @close="closeMember"
      />
    </transition>
  </div>
</template>

<script>
import TeamMenu from "./TeamMenu"
import TeamSlider from "./TeamSlider"
import TeamMember from "./TeamMember"

export default {
  name: "TeamList",
  components: {
    TeamMenu,
    TeamSlider,
    TeamMember
  },
  data() {
    return {
      currentMember: {},
      isModalTeamMember: false,
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
      team: {
        1: {
          id: 1,
          img: require('@/assets/team/photo_1.jpg'),
          name: "Thomas",
          groupId: [1, 2]
        },
        2: {
          id: 2,
          img: require('@/assets/team/photo_2.jpg'),
          name: "Jane",
          groupId: [1, 3],
          text: `
            <p>
              <b>Agiler Coach aus Überzeugung</b> Transparente Kommunikation, wertschöpfende Arbeit und vor allem Respekt in der Zusammenarbeit treiben mich an.
            </p>
            <p class="mt-30"><b>Privat</b> bin ich begeisterte WOLerin (Working Out Loud) und singe gern, egal ob im Chor oder beim Karaoke.</p>
          `
        },
        3: {
          id: 3,
          img: require('@/assets/team/photo_3.jpg'),
          name: "John",
          groupId: [1, 3]
        },
        4: {
          id: 4,
          img: require('@/assets/team/photo_4.jpg'),
          name: "Alphared",
          groupId: [1, 2]
        },
        5: {
          id: 5,
          img: require('@/assets/team/photo_5.jpg'),
          name: "Alex",
          groupId: [1, 2]
        },
        6: {
          id: 6,
          img: require('@/assets/team/photo_6.jpg'),
          name: "Sam",
          groupId: [1, 2, 3, 4]
        }
      }
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
    },
    showMember(id) {
      const member = this.team[id]
      this.isModalTeamMember = true
      this.updateCurrentMember(member)
    },
    closeMember() {
      this.isModalTeamMember = false
    },
    updateCurrentMember(member) {
      this.currentMember.name = member.name
      this.currentMember.img = member.img
      this.currentMember.text = member.text
    }
  },
  computed: {
    teamMenuList () {
      return Object.values(this.teamMenu)
    },
    filteredTeam() {
      return this.teamValues.filter(item => item.groupId.includes(this.currentActiveTeamMenu))
    },
    teamValues() {
      return Object.values(this.team)
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  position: relative;
}

.teamMember {
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  background: #fff;
}

.hidden {
  visibility: hidden;
}
</style>
