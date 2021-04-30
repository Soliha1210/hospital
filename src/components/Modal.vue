<template>
	<div>
		<div class="modal" v-show="modal" v-on:keypress.enter="add">
			<div class="new">
				<div class="title">
					Yangi bemor ro’yhatdan o’tkazish
				</div>
				<div class="input">
					<input type="text" placeholder="Ism sharifi" v-model="obj.name">
					<input type="text" placeholder="email" v-model="obj.email">
					<input type="number" placeholder="Telfon nomer" v-model="obj.number">
					<input type="date" placeholder="Tashrif sanasi" v-model="obj.date">
					<input type="text" placeholder="rasm url" v-model="obj.pic">
					<select class="sel" v-model="obj.doc">
						<option value="">Qaysi doktorga</option>
						<option value="Nevropotolog">Nevropotolog</option>
						<option value="Lor">Lor</option>
						<option value="Terapevt">Terapevt</option>
					</select>
					<select class="sel" v-model="obj.reason">
						<option value=""></option>
						<option value="Asabiylik">Asabiylik</option>
						<option value="Laringit">Laringit</option>
					</select>
					<input type="date" placeholder="Chiqish sanasi" v-model="obj.exit">
					<select class="sel" v-model="obj.docname">
						<option value="Lazizov Odilbek">Lazizov Odilbek</option>
						<option value="Mamajonova Soliha">Mamajonova Soliha</option>
					</select>
					<input type="text" placeholder="Davolangan bo'lim" v-model="obj.section">
					<input type="textarea" placeholder="Murojaat sababi" v-model="obj.reas">
					<input type="date" placeholder="Tug'ilgan sanasi" v-model="obj.born">
					<input type="text" placeholder="Oilaviy holat" v-model="obj.family">
					<input type="number" placeholder="Telefon raqam" v-model="obj.tel">
					<input type="text" placeholder="Tug'ilgan joyi" v-model="obj.place">
					<input type="text" placeholder="Ma'lumoti" v-model="obj.info">
					<input type="text" placeholder="Manzil" v-model="obj.address">
					<select class="sel" v-model="obj.busy">
						<option value="Ishlaydi">Ishlaydi</option>
						<option value="Ishlamaydi">Ishlamaydi</option>
					</select>
					<input type="text" placeholder="Ish joyi" v-model="obj.work">
					<select class="sel" v-model="obj.blood">
						<option value="I guruh">I guruh</option>
						<option value="II guruh">II guruh</option>
						<option value="III guruh">III guruh</option>
						<option value="IV guruh">IV guruh</option>
					</select>
					<input type="text" placeholder="Imtiyoz kategoriyasi" v-model="obj.privilege">

				</div>
				<div class="btn">
					<button class="cencel" @click="closeModal">Bekor qilish</button>
					<button class="add" @click="add">Qo'shish</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				obj: {},
				patient: {}
			}
		},
		methods: {
			closeModal() {
				this.$store.commit('changeModal', false)
			},
			add() {
				this.$store.dispatch('addPatient', this.obj)
				this.obj = {}
				this.$store.commit('changeModal', false)
			}
		},
		computed: {
			modal() {
				return this.$store.getters.getModal
			}
		}
	}
</script>

<style>
	.modal {
		padding: 100px;
		background: rgba(19, 19, 19, 0.58);
		height: 100%;
		left: 0;
		right: 0;
		position: fixed;
		top: 0;
	}

	.new {
		margin: auto;
		background-color: #FFFFFF;
		height: 100%;
	}

	.input {
		margin-left: 33px;

	}

	.input input {
		width: 268px;
		height: 32px;
		border-radius: 10px;
		margin-top: 18px;
		background: #FDFDFD;
		border: 1px solid #BBBBBB;
		padding-left: 14px;
	}

	input:focus {
		outline: 0;
	}

	.sel {
		width: 268px;
		height: 32px;
		border-radius: 10px;
		margin-top: 18px;
		background: #FDFDFD;
		border: 1px solid #BBBBBB;
		padding-left: 14px;
	}

	.sel:focus {
		outline: 0;
	}

	.btn {
		margin-left: 33px;
	}

	.cencel {
		width: 130px;
		height: 32px;
		border-radius: 10px;
		background-color: #EB5757;
		color: white;
		font-size: 11px;
		margin-top: 18px;
		margin-right: 8px;
	}

	.add {
		width: 130px;
		height: 32px;
		border-radius: 10px;
		background-color: #27AE60;
		color: white;
		font-size: 11px;
		margin-top: 18px;
	}
</style>