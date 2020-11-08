<template>
  <container>
    <base-title class="mt-50 mb-50" center>Meet the Team</base-title>
    <paragraph center>
      Holistkönnerinnen und -könner sind keine gleichgeschalteten Roboter mit einer Musterlösung für jedes Problem. Es gibt keine Workshops in denen man lernt, wie bei Holisticon gearbeitet wird. Jede und jeder ist individuell und das ist auch gut so. Trotzdem verfolgen wir die gleichen Ziele: hochwertige Software, erfolgreiche Projekte, konstruktives Streiten, kreatives Chaos und Selbstorganisation.
    </paragraph>
  </container>
</template>

<script>
import Container from "@/components/Container"
import BaseTitle from "@/components/BaseTitle"
import Paragraph from "@/components/Paragraph"

export default {
  name: "Team",
  components: {
    Container,
    BaseTitle,
    Paragraph
  }
}
</script>
