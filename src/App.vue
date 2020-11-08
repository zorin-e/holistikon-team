<template>
  <main>
    <base-header>
      <container>
        <base-menu />
      </container>
    </base-header>
    <router-view />
  </main>
</template>

<script>
import "@/styles/common.scss";
import Container from "@/components/Container"
import BaseHeader from "@/components/BaseHeader"
import BaseMenu from "@/components/BaseMenu"

export default {
  name: "App",
  components: {
    Container,
    BaseHeader,
    BaseMenu
  }
}
</script>
