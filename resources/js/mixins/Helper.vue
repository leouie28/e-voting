<script>
import Warning from "@/components/Warning.vue";
import Alert from "@/components/Alert.vue";
import Loader from "@/components/loader.vue"
export default {
    components: {
        Warning,
        Alert,
        Loader,
    },
    data() {
        return {
            alert_data: { trigger: false },
            warning_data: { trigger: false },
        };
    },
    methods: {
        _newAlert(trigger, color, text) {
            this.alert_data.color = color;
            this.alert_data.text = text;
            setTimeout(() => {
                this.alert_data.trigger = trigger;
            }, 1000);
        },
        _warning(trigger, text, item = null) {
            this.warning_data.trigger = trigger;
            this.warning_data.text = text;
            if (item) {
                this.warning_data.item = item;
            }
        },
    },
};
</script>
