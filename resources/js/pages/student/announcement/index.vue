<template>
    <div>
        <v-card class="mb-4">
            <v-card-text>
                <v-toolbar-title
                    class="d-flex justify-space-between align-center"
                >
                    <div>
                        Announcement
                        <v-icon class="ml-1">mdi-bullhorn-outline</v-icon>
                    </div>
                    <v-btn icon color="primary" @click="refresh">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <div class="pl-4">
                    <div v-if="!loading">
                        <template v-for="announce in announces">
                            <div
                                class="mb-2 primary--text text-decoration-underline"
                                style="font-size: 21px; cursor: pointer;"
                                :key="announce.id"
                                @click="select(announce)"
                            >
                                <span>#{{ announce.title }}</span>
                            </div>
                        </template>
                    </div>
                    <div v-else>
                        <v-skeleton-loader
                            class="mx-auto"
                            max-width="600"
                            type="list-item-three-line"
                        ></v-skeleton-loader>
                    </div>
                </div>
            </v-card-text>
            <v-card-actions class="pt-0 mt-0" v-if="announces.length >= 4">
                <v-btn x-small class="mx-auto" color="grey darken-3" outlined>
                    Show More
                    <v-icon small>mdi-chevron-down-circle-outline</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-dialog v-model="dialog" max-height="500">
            <v-card>
                <v-card-title class="d-flex justify-space-between">
                  <span>Announcement</span>
                  <v-btn color="secondary" @click="dialog=false">
                    <span class="text-capitalize">Clos</span>
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-toolbar-title class="primary--text">{{ selected.title }}</v-toolbar-title>
                  <div>
                    {{ selected.content }}
                  </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data: () => ({
        announces: [],
        loading: true,
        dialog: false,
        selected: {}
    }),
    mounted() {
        this.getAnnounces();
    },
    methods: {
        refresh() {
            this.loading = true;
            this.getAnnounces();
        },
        select(item) {
          this.selected = item
          this.dialog = true
        },
        getAnnounces() {
            axios.get(`/student-api/announces/get-latest`).then(({ data }) => {
                this.announces = data;
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            });
        },
    },
};
</script>
