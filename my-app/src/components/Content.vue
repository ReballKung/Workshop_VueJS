<template>
  <div>
    <div class="content-pic">
        <v-row>
            <v-col cols="4">
                <v-card text="..." class="cards" width="300">
                    <v-img src="../assets/ex1.jpg" width="300" height="300">
                        <p class="cards-text">กิจกรรมที่เข้าร่วม : <br/>{{ JobInSchool }}</p>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/ex2.jpg" width="300" height="300">
                        <p class="cards-text">ตำแหน่งในวงดนตรี : <br/>{{ bandFAV }}</p>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/ex6.jpg" width="300" height="300">
                        <p class="cards-text">งานอดิเรก : <br/>{{hobby}}</p>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/ex3.jpg" width="300" height="300">
                        <p class="cards-text">ทักษะในการเข้าสังคม : <br/>{{ EX }}</p>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/ex4.jpg" width="300" height="300">
                        <p class="cards-text">คำคมประจำตัว : <br/>{{ textCool }}</p>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/ex5.jpg" width="300" height="300">
                        <p class="cards-text">วันเดือนปี : <br/>{{birthDate}}</p>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/ex7.png" width="300" height="300">
                        <p class="cards-text">จุดแข็ง : <br/>{{ strong }}</p>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/ex8.png" width="300" height="300">
                        <p class="cards-text">จุดอ่อน : <br/>{{unstrong}}</p>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card text="..." class="cards">
                    <v-img src="../assets/Type_ENFJ.png" width="300" height="300">
                        <p class="cards-text">MBTI ของฉัน : <br/>{{ type }}</p>
                    </v-img>
                </v-card>
                
            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            type : "ENFJ-A",
            bandFAV : "มือกลอง",
            JobInSchool : "พากย์บรรยายการแข่งขัน Rov",
            EX : "มีทักษะในการพูดนำเสนอ",
            textCool : "ถึงไม่ได้เก่งมาก แต่จะพยายามให้ถึงที่สุด",
            birthDate : "30/05/2002",
            strong : "เรียนรู้ได้ไว",
            unstrong : "ใช้เวลาในการทำความเข้าใจนาน",
            hobby: "ดูหนัง ฟังเพลง เล่นเกม ซ้อมดนตรี",
        }
    }
}
</script>

<style>
    hr {
        opacity: 20%;
    }
    .content-pic{
        margin-top: 20px;
    }
    .cards-text {
        display: none; 
    }
    .cards:hover .cards-text {
        margin: 120px 20px 20px 20px;
        cursor:none;
        color: white;
        transition: 0.6s;
        display: block;
        /* justify-content: center ;  */
        text-align: center;
    }
    .cards :hover {
        transition: 0.3s;
        opacity: 85%;
        background-color: black;
        /* content: "Hello World"; */
    }
</style>