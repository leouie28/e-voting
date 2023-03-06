<template>
    <div>
        <v-card outlined>
            <v-card-title class="mb-0 pb-0">Result</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pt-0">
                <custom-bar :elect="elect"></custom-bar>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import CustomBar from '@/components/chart/cus-bar.vue';
export default {
    components: {
        CustomBar,
    },
    data: () => ({
        elect: {}
    }),
    created() {
        this.getResult()
    },
    methods: {
        getResult() {
            let key = this.$route.params.key
            if(key) {
                axios.get('/student-api/election-api/'+key).then(({data}) => {
                    this.elect = data
                })
            }
        }
    }
}
</script>