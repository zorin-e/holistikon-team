<template>
  <wrapper center>
    <form :class="$style.form">
      <div class="row">
        <div class="col-md-6">
          <base-input placeholder="Name" />
        </div>
      </div>
      <div class="row mt-20">
        <div class="col-md-6">
          <base-input placeholder="Email" />
        </div>
        <div class="col-md-6">
          <base-input placeholder="Telefon" />
        </div>
      </div>
      <base-button class="mt-30">Join us</base-button>
    </form>
  </wrapper>
</template>

<script>
import BaseInput from "@/components/BaseInput"
import Wrapper from "@/components/Wrapper"
import BaseButton from "@/components/BaseButton"

export default {
  name: "JoinUsForm",
  components: {
    BaseInput,
    Wrapper,
    BaseButton
  }
}
</script>

<style module>
.form {
  width: 100%;
  max-width: 528px;
}
</style>
