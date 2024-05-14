<template>
    <div>
        <div class="card-select">
            <v-card width="300" outlined>
                <v-list>
                    <v-list-group :value="true" prepend-icon="mdi-laptop">
                        <template v-slot:activator>
                            <v-list-item-title>ยี่ห้อแล็ปท็อป</v-list-item-title>
                        </template>
                        <v-list-group :value="true" no-action sub-group>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>Admin</v-list-item-title>
                                </v-list-item-content>
                            </template>
                        </v-list-group>
                    </v-list-group>
                </v-list>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
       
    }),
}
</script>

<style>
.card-select {
    margin-top: 20px;
}
</style>