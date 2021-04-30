<template>
  <div class="home">
    <Info></Info>
    <Patcopy></Patcopy>
    <DocCopy></DocCopy>
  </div>
</template>

<script>
import Info from '../components/Info'
import Patcopy from '../components/Patcopy'
import DocCopy from '../components/DocCopy'

export default {
  name: 'Home',
  components: {
    Info,
    Patcopy,
    DocCopy
  }
}
</script>
