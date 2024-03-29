<template>
    <div>
        <div v-if="updating" class="mb-4">
            <v-btn
                small
                color="success"
                outlined
                @click="readonly = false"
                v-if="readonly"
            >
                <v-icon small class="mr-1">mdi-square-edit-outline</v-icon>
                Edit
            </v-btn>
            <div v-else>
                <v-btn small color="success" @click="readonly = true">
                    <v-icon small class="mr-1">mdi-check</v-icon>
                    Save
                </v-btn>
                <v-btn
                    small
                    color="error"
                    @click="(readonly = true), $emit('cancelEdit')"
                    class="ml-1"
                >
                    <v-icon small class="mr-1">mdi-close</v-icon>
                    Cancel
                </v-btn>
            </div>
        </div>
        <template v-for="(position, index) in positions">
            <v-card outlined class="mb-4" :key="index">
                <v-card-title>["{{ position.name }}"]</v-card-title>
                <v-card-text>
                    <template v-for="(rep, i) in position.candidate">
                        <v-row :key="i">
                            <v-col md="1" cols="12" class="px-2">
                                <v-row wrap>
                                    <v-col md="12" cols="12">
                                        <div class="feat-img mx-auto">
                                            <input
                                                type="file"
                                                class="hide"
                                                :ref="`file_input_${index}${i}`"
                                                accept=".jpeg,.png,.jpg"
                                                @change="
                                                    onFileChange(
                                                        $event.target.files,
                                                        index,
                                                        i
                                                    )
                                                "
                                            />
                                            <div
                                                @click="
                                                    !readonly
                                                        ? triggerInput(index, i)
                                                        : false
                                                "
                                                class=""
                                                style="height: 100%"
                                            >
                                                <div
                                                    v-if="
                                                        !positions[index]
                                                            .candidate[i].image
                                                    "
                                                    class="d-flex justify-center align-center flex-column"
                                                    style="height: 100%"
                                                >
                                                    <v-icon
                                                        >mdi-file-image</v-icon
                                                    >
                                                    icon/img
                                                </div>
                                                <v-img
                                                    alt="icon"
                                                    position="center center"
                                                    max-height="100%"
                                                    max-width="100%"
                                                    :src="
                                                        positions[index]
                                                            .candidate[i].image
                                                    "
                                                ></v-img>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col md="11" cols="12">
                                <v-row>
                                    <v-col md="7" cols="12">
                                        <v-text-field
                                            :filled="readonly ? false : true"
                                            :readonly="readonly"
                                            :dense="readonly ? false : true"
                                            label="Candidate Name"
                                            v-model="
                                                positions[index].candidate[i]
                                                    .name
                                            "
                                            placeholder="Ex. President"
                                            hide-details="auto"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col md="5" cols="12">
                                        <v-select
                                            :filled="readonly ? false : true"
                                            :readonly="readonly"
                                            :dense="readonly ? false : true"
                                            hide-details="auto"
                                            :prepend-inner-icon="
                                                !readonly ? 'mdi-plus' : ''
                                            "
                                            @click:prepend-inner="
                                                $router.push({
                                                    name: 'admin-partylist',
                                                })
                                            "
                                            :items="partylist"
                                            item-text="name"
                                            item-value="id"
                                            v-model="
                                                positions[index].candidate[i]
                                                    .partylist
                                            "
                                            label="Party Group (optional)"
                                        >
                                            <template v-slot:item="{ item }">
                                                <v-avatar
                                                    size="35"
                                                    style="
                                                        border: 1px solid #ccc;
                                                    "
                                                >
                                                    <img
                                                        :src="
                                                            item.images.length >
                                                            0
                                                                ? imageSrc(
                                                                      item
                                                                          .images[0]
                                                                  )
                                                                : '/images/system/noimage.png'
                                                        "
                                                    />
                                                </v-avatar>
                                                <span class="ml-2">{{
                                                    item.name
                                                }}</span>
                                            </template>
                                        </v-select>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </template>
                    <v-row class="mb-1" v-if="!readonly">
                        <div class="text-center">
                            <v-btn outlined @click="addSlot(index)">
                                Add {{ position.name }} candidate
                                <v-icon class="ml-2">mdi-plus</v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </div>
</template>
<script>
export default {
    data: () => ({
        partylist: [],
        readonly: false,
        updating: false,
    }),
    props: {
        positions: {
            type: Array,
            default: () => [],
        },
    },
    created() {
        this.getPartylist();
        if (localStorage._show) {
            if (localStorage._show == "1") {
                this.readonly = true;
                this.updating = true;
            }
        }
    },
    methods: {
        addSlot(i) {
            this.positions[i].candidate.push({
                name: "",
                partylist: "",
                image: "",
            });
        },
        getPartylist() {
            axios.get(`/admin-api/partylist`).then(({ data }) => {
                this.partylist = data.data;
            });
        },
        triggerInput(index1, index2) {
            console.log(index1, index2);
            const input = `file_input_${index1}${index2}`;
            this.$refs[input][0].click();
            // this.$refs.key[index1][index2].click()
            // this.$refs.key[`'file_input'+index1+index2`][i].click()
        },
        async onFileChange(file, index1, index2) {
            console.log(file);
            let imageFile = file[0];
            let temp = {};
            if (file.length > 0) {
                if (!imageFile.type.match("image.*")) {
                    alert("Please choose an image file");
                } else {
                    let imageURL = URL.createObjectURL(imageFile);
                    this.positions[index1].candidate[index2].image =
                        await this.createImageBase64(imageFile);
                    // this.election.image = await this.createImageBase64(imageFile);
                }
            }
        },
    },
};
</script>
<style scoped>
.feat-img {
    width: 100%;
    height: 52px;
    border: 1px dashed grey;
}
</style>
