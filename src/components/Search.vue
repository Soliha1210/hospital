<template>
    <div class="search">
        <div class="left">
            <div class="image">
                <img src="../assets/img/lupa.png" alt="">  
            </div>
            <input type="text" placeholder="Search">
        </div> 
        <div class="right">
            <div class="look">
                    <span class="img"><img src="../assets/img/bell.png" alt="">
                        <span class="num">9</span>
                    </span>
            </div>
            <div class="human">
                <img src="../assets/img/human.png" alt="">
            </div>
        </div>           
    </div>
</template>

<script>
export default {
    computed:{
        patient(){
            return this.$store.getters.getRePatient(this.id)
        }
    }
}
</script>

<style>
    .search{
        padding-top: 24px;
        padding-left: 18px;
        justify-content: space-between;
    }
    .left{
        display: flex;
    }
    .left input{
        width:350px;
        height:40px;
        border-radius: 50px;
        border:0;
        padding-left:42px;
    }
    .img{
        position: relative;
    }
    .num{
        position: absolute;
        font-size: 10px;
        font-family: 'rb';
        color:white;
        align-items: center;
        text-align: center;
        right: -10px;
    }
    span .num{
        background-color: #FF6760;
        border: 2px solid #F6F8FB;
        border-radius: 50%;
        width:16px;
        height:16px;
    }
    
    .search{
        display:flex;
        width:1184px;
    }
    .left .image{
        width:14px;
        height:14px;
        background-color: white;
        margin-left: 14px;
        position: absolute;
        align-items: center;
        margin-top: 13px;
    }
    .right{
        display:flex;
    }
    .human {
        padding-left: 18px;
        padding-right: 38px;
    }
</style>