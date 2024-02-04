<template>
  <div class="loading-box">
    <div class="loader">
      <div id="ld2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#ld2 {
  display: flex;
  flex-direction: row;
}
#ld2 div {
  height: 20px;
  width: 5px;
  background: #fe4a49;
  margin: 3px;
  border-radius: 25px;
}
#ld2 div:nth-child(1) {
  animation: ld2 1s ease-in-out infinite 0s;
}
#ld2 div:nth-child(2) {
  animation: ld2 1s ease-in-out infinite 0.1s;
}
#ld2 div:nth-child(3) {
  animation: ld2 1s ease-in-out infinite 0.2s;
}
#ld2 div:nth-child(4) {
  animation: ld2 1s ease-in-out infinite 0.3s;
}
#ld2 div:nth-child(5) {
  animation: ld2 1s ease-in-out infinite 0.4s;
}
#ld2 div:nth-child(6) {
  animation: ld2 1s ease-in-out infinite 0.5s;
}
#ld2 div:nth-child(7) {
  animation: ld2 1s ease-in-out infinite 0.6s;
}

@keyframes ld2 {
  0% {
    transform: scaleY(1);
    background: #fed766;
  }
  25% {
    background: #009fb7;
  }
  50% {
    transform: scaleY(2);
    background: #59cd90;
  }
  75% {
    background: #fe4a49;
  }
  100% {
    transform: scaleY(1);
    background: #d91e36;
  }
}
</style>
