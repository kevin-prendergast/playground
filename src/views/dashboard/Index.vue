<template>
    <div>
        <h1>Dashboard</h1>
        <ScrollingDateComponent />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ScrollingDateComponent from "../../components/ScrollingDateComponent.vue"

@Component({
    components: { ScrollingDateComponent }
})
export default class Dashboard extends Vue {
}
</script>

<style lang="scss" scoped></style>
