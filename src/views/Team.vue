<template>
  <div style="overflow: hidden;">
    <container>
      <base-title class="mt-50 mb-50" center>Meet the Team</base-title>
      <paragraph center>
        Holistkönnerinnen und -könner sind keine gleichgeschalteten Roboter mit einer Musterlösung für jedes Problem. Es gibt keine Workshops in denen man lernt, wie bei Holisticon gearbeitet wird. Jede und jeder ist individuell und das ist auch gut so. Trotzdem verfolgen wir die gleichen Ziele: hochwertige Software, erfolgreiche Projekte, konstruktives Streiten, kreatives Chaos und Selbstorganisation.
      </paragraph>
      <team-list class="mt-50" :class="$style.teamListIndent" />
      <base-title class="mb-50" center>Who we are</base-title>
      <paragraph center :class="$style.paragraphIndent">
        Holistkönnerinnen und -könner sind keine gleichgeschalteten Roboter mit einer Musterlösung für jedes Problem. Es gibt keine Workshops in denen man lernt, wie bei Holisticon gearbeitet wird. Jede und jeder ist individuell und das ist auch gut so. Trotzdem verfolgen wir die gleichen Ziele: hochwertige Software, erfolgreiche Projekte, konstruktives Streiten, kreatives Chaos und Selbstorganisation.
      </paragraph>
    </container>
    <team-facts-list />
    <base-title center is-not-line class="mb-50">We are different. <br>and this unites us</base-title>
    <we-are-different />
    <block>
      <container>
        <base-title center is-not-line class="mb-50">Join us! </base-title>
        <join-us-form />
      </container>
    </block>
  </div>
</template>

<script>
import Container from "@/components/Container"
import BaseTitle from "@/components/BaseTitle"
import Paragraph from "@/components/Paragraph"
import TeamList from "@/components/Team/TeamList"
import TeamFactsList from "@/components/Team/WhoWeAre/TeamFactsList"
import WeAreDifferent from "@/components/Team/WeAreDifferent"
import JoinUsForm from "@/components/Team/JoinUs/JoinUsForm"
import Block from "@/components/Block"

export default {
  name: "Team",
  components: {
    Container,
    BaseTitle,
    Paragraph,
    TeamList,
    TeamFactsList,
    WeAreDifferent,
    JoinUsForm,
    Block
  }
}
</script>

<style lang="scss" module>
.teamListIndent {
  margin-bottom: 140px;

  @include media-breakpoint-down(xs) {
    margin-bottom: 50px;
  }
}

.paragraphIndent {
  margin-top: 100px;
  margin-bottom: 200px;

  @include media-breakpoint-down(xs) {
    margin-top: 50px;
    margin-bottom: 100px;
  }
}
</style>
