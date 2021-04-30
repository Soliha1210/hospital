<template>
    <div>
        <div class="modal" v-show="EditModal" v-on:keypress.enter="add" >
            <div class="new" >
                <div class="title">
                    Yangi bemor ro’yhatdan o’tkazish
                </div> 
                <div class="input">
                    <input type="text" placeholder="Ism sharifi" v-model="editObj.name">
                    <input type="text" placeholder="email" v-model="editObj.email">
                    <input type="number" placeholder="Telfon nomer" v-model="editObj.number">
                    <input type="text" placeholder="rasm url" v-model="editObj.pic">
                    <select class="sel" v-model="editObj.doc">
                        <option value="">Qaysi doktorga</option>
                        <option value="Nevropotolog">Nevropotolog</option>
                        <option value="Lor">Lor</option>
                        <option value="Terapevt">Terapevt</option>
                    </select>
                    <select class="sel" v-model="editObj.reason">
                        <option value=""></option>
                        <option value="Asabiylik">Asabiylik</option>
                        <option value="Laringit">Laringit</option>
                    </select>
            </div>
            <div class="btn">
                <button class="cencel" @click="closeModal">Bekor qilish</button>
                <button class="add" @click="save">Saqlash</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
	props: ['editObj'],
	data(){
		return{
            patient:{},
		}
	},
		methods:{
			closeModal(){
				this.$store.commit('changeEditModal', false)
			},
			save(index){
				let item={
					index:index,
					obj:obj[index]
				}
					this.$store.dispatch('editPatient',item)
			}
		},
		computed:{
					EditModal(){
							return this.$store.getters.getEditModal
					}
		}
}
</script>

<style >
    .modal{
        background: rgba(19, 19, 19, 0.58); 
        height:100%;  
        left:0;
        right:0;
        position: fixed;
        top: 0;
    }
    .new{
        margin: auto;
        background-color: #FFFFFF;
        
    }
    .input{
        margin-left: 33px;

    }
    .input input{
        width:268px;
        height:32px;
        border-radius: 10px;
        margin-top: 18px;
        background: #FDFDFD;
        border: 1px solid #BBBBBB;
        padding-left: 14px;
    }
    input:focus{
        outline: 0;
    }
    .sel{
        width:268px;
        height:32px;
        border-radius: 10px;
        margin-top: 18px;
        background: #FDFDFD;
        border: 1px solid #BBBBBB;
        padding-left: 14px;
    }
    .sel:focus{
        outline: 0;
    }
    .btn{
        margin-left: 33px;
    }
    .cencel{
        width:130px;
        height:32px;
        border-radius: 10px;
        background-color: #EB5757;
        color:white;
        font-size: 11px;
        margin-top: 18px;
        margin-right: 8px;
    }
    .add{
        width:130px;
        height:32px;
        border-radius: 10px;
        background-color: #27AE60;
        color:white;
        font-size: 11px;
        margin-top: 18px;
    }
    
</style>