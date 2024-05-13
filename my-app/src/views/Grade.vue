<template>
    <div class="container-xxl">
        <div class="d-flex justify-md-center grade-card">
            <v-card width="500">
                <v-card-title>
                    โปรแกรมคำนวณเกรด ปีการศึกษา 2567
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="calGrade"> 
                        <v-text-field v-model="grade" label="Label"></v-text-field>
                        <v-btn color="success" @click="calGrade()">คำนวณ</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
        <div class="d-flex justify-md-center grade-card">
            <v-card width="500">
                <v-card-title>
                    {{ result }}
                </v-card-title>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            grade : 0 , 
            result : 'กรุณากรอกคะแนนของคุณด้วย'
        }
    },
    methods : {
        calGrade() {
            if (this.grade > 100 || this.grade < 0) {
                this.result = "กรุณากรอกคะแนนระหว่าง 0-100";
                alert('กรุณากรอกคะแนนระหว่าง 0-100') ;
            }
            else if (this.grade >= 0 || this.grade <= 100){
                this.grade >=80 ? this.result = 'คุณได้เกรด A' : 
                this.grade >=70 ? this.result = 'คุณได้เกรด B' : 
                this.grade >=60 ? this.result = 'คุณได้เกรด C' : 
                this.grade >=50 ? this.result = 'คุณได้เกรด D' : 
                this.grade <=49 ? this.result = 'คุณได้เกรด F' :
                alert('กรุณากรอกคะแนนระหว่าง 0-100') 
            }
        }
    }  
}
</script>

<style>
.grade-card {
    padding: 20px 20px 20px 20px;
}
</style>