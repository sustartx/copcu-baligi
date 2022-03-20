<template>
    <Header></Header>
    <div style="flex: 2; display: flex">
        <div id="left-sidebar">
            <div
                id="sidebar"
                class="collapse collapse-horizontal show border-end"
                style="height: 100%"
            >
                <Sidebar />
            </div>
        </div>
        <div id="right-content">
            <div class="container-fluid">
                <div class="row">
                    <router-view />
                    <div class="col-12">
                        <hr />
                        <button class="btn btn-success" @click.prevent="send">
                            Haberleşme Testi
                        </button>
                        <pre>{{ JSON.stringify(response1, null, 2) }}</pre>
                        <hr />
                        <pre>{{ JSON.stringify(response2, null, 2) }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header";
import Sidebar from "@/views/layout/Sidebar";
import { ApiService } from "@/services";

const DefaultMessage = "Ping";
const DefaultResponse = "Buraya sonuç gelecek";

export default {
    name: "Layout",
    components: {
        Header,
        Sidebar,
    },
    data() {
        return {
            pageWrapperClasses: {
                toggled: true,
            },
            message: DefaultMessage,
            response1: DefaultResponse,
            response2: DefaultResponse,
        };
    },

    created() {
        const $this = this;

        ApiService.receive("background_data_connection", function (data) {
            console.log("Electron'dan gelen cevap: ");
            console.log(data);
            if (data.action === "json" && data.result_type === "stdout") {
                $this.response1 = data;
            }
            if (
                data.action === "json_wait_10_second" &&
                data.result_type === "stdout"
            ) {
                $this.response2 = data;
            }
        });
    },
    methods: {
        send() {
            const $this = this;

            ApiService.send("background_data_connection", {
                action: "json",
                binary: "/linux/json/json",
                params: [],
                listen: true,
            });
            ApiService.send("background_data_connection", {
                action: "json_wait_10_second",
                binary: "/linux/json_sleep_10_second/json_sleep_10_second",
                params: [],
                listen: true,
            });

            $this.response1 = null;
            $this.response2 = null;
        },
    },
};
</script>

<style></style>
