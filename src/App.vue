<template>
  <main>
    <base-header>
      <container :class="$style.wrapper">
        <div :class="$style.logoWrapper">
          <logo :class="$style.logo" class="mb-10" />
        </div>
        <div>
          <navbar />
          <div :class="[$style.flex, $style.text]" class="ml-25">
            <droplet italic full-responsive class="mt-10">we are</droplet>
            <base-top-title class="ml-20">PROFESSIONALS<br>INDIVIDUALS<br>N3RDS</base-top-title>
          </div>
        </div>
      </container>
    </base-header>
    <router-view />
  </main>
</template>

<script>
import "@/styles/common.scss";
import Container from "@/components/Container"
import BaseHeader from "@/components/BaseHeader"
import Navbar from "@/components/Navbar"
import Droplet from "@/components/Droplet"
import BaseTopTitle from "@/components/BaseTopTitle"
import Logo from "@/assets/logo.svg"

export default {
  name: "App",
  components: {
    Container,
    BaseHeader,
    Navbar,
    Droplet,
    BaseTopTitle,
    Logo
  }
}
</script>

<style lang="scss" module>
.wrapper {
  @include flex(space-between);
}

.flex {
  @include flex;
}

.logoWrapper {
  height: 60px;
  @include flex(null, flex-end);
}

.text {
  transform: translateY(50%);
  margin-top: -5%;

  @include media-breakpoint-down(xs) {
    margin-left: 10px;
  }
}

.logo {
  @include media-breakpoint-down(sm) {
    position: absolute;
    left: 25px;
    z-index: 1;
  }
}
</style>
