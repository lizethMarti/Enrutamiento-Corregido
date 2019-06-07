<template>
    <v-list-tile>
        <v-list-tile-action>
            <v-checkbox v-model="perrito.completar">
            </v-checkbox>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
export default {
    props:{
        perros:Object
    }
}
</script>

<style>

</style>
