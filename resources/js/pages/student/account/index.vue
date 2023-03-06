<template>
    <div>
        <v-card>
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Account
                        <!-- <v-icon class="ml-1">mdi-cloud-print-outline</v-icon> -->
                    </div>
                    <!-- <v-btn icon color="primary">
                        <v-icon>mdi-dots-vertical-circle-outline</v-icon>
                    </v-btn> -->
                    <v-btn color="primary" @click="dialog=true">
                        <span class="text-capitalize">Change Password</span>
                    </v-btn>
                </v-toolbar-title>
                <div>
                    <v-row class="mt-1">
                        <v-col cols="12">
                            <v-text-field
                            label="Student Id"
                            disabled
                            v-model="profile.student_id"
                            filled
                            dense
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="Name"
                            v-model="profile.name"
                            readonly
                            filled
                            dense
                            hide-details="auto"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>
        </v-card>
        <v-card class="mt-4">
            <v-card-text>
                <v-toolbar-title class="d-flex justify-space-between align-center">
                    <div>
                        Your recent activity
                        <!-- <v-icon class="ml-1">mdi-cloud-print-outline</v-icon> -->
                    </div>
                    <!-- <v-btn icon color="primary">
                        <v-icon>mdi-dots-vertical-circle-outline</v-icon>
                    </v-btn> -->
                </v-toolbar-title>
                <div>
                    <v-timeline align-top dense>
                        <v-timeline-item
                        small
                        v-for="act in activities"
                        :key="act.id"
                        color="brown">
                            <span class="">2022/02/10 Voted to Ssg Election</span><br>
                            <v-divider></v-divider>
                        </v-timeline-item>
                    </v-timeline>
                </div>
            </v-card-text>
        </v-card>
        <v-dialog v-model="dialog" max-width="400">
          <v-card>
            <v-card-title>Change Password</v-card-title>
            <v-card-text>
              <v-row class="mt-1">
                <v-col cols="12">
                    <v-text-field
                    label="Current Password"
                    v-model="old_password"
                    filled
                    dense
                    hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="New Password"
                    v-model="new_password"
                    filled
                    dense
                    hide-details="auto"
                    ></v-text-field>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn 
              @click="changePass"
              :disabled="old_password && new_password ? false : true"
              color="primary">
                <span class="text-capitalize">Change</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <Alert :data="alert_data"></Alert>
    </div>
</template>
<script>
export default {
    data() {
        return {
            old_password: "",
            new_password: "",
            dialog: false,
            loading: true,
            profile: {},
            activities: []
        }
    },
    created() {
        this.getProfile()
    },
    methods: {
        getProfile() {
          axios.get(`/student-api/profile`).then(({data}) => {
              this.profile = data.account
              this.activities = data.activity
          })
        },
        changePass() {
          let payload = {old_password: this.old_password, new_password: this.new_password}
          axios.put(`/student-api/change-password`, payload).then(({data}) => {
            this.dialog = false
            this._newAlert(true, data.type, data.message)
          })
        }
    }
}
</script>