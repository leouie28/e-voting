<template>
    <div>
        <v-overlay value="true" z-index="1000" opacity=".1">
            <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>