<template>
	<div>
		<div class="modal" v-show="modalDoc" v-on:keypress.enter="add">
			<div class="new">
				<div class="title">
					Yangi shifokorni ro'yhatdan o'tkazish
				</div>
				<div class="input">
					<input type="text" placeholder="Rasm joylashtiting" v-model="doc.pic">
					<input type="text" placeholder="Ism sharifi" v-model="doc.name">
					<input type="text" placeholder="email" v-model="doc.email">
					<input type="text" placeholder="Mutaxassisligi" v-model="doc.spec">
					<input type="date" placeholder="Bo'lim" v-model="doc.section">
					<input type="text" placeholder="Qabul kunlari" v-model="doc.acceptance">
					<select class="sel" v-model="doc.specialized">
						<option value="Xirurg">Xirurg</option>
						<option value="Nevropotolog">Nevropotolog</option>
						<option value="Lor">Lor</option>
						<option value="Terapevt">Terapevt</option>
						<option value="Okulist">Okulist</option>
						<option value="Xirurg">Xirurg</option>
					</select>
					<input type="date" placeholder="Ishga kirgan sanasi" v-model="doc.workdate">
					<select class="sel" v-model="doc.worksec">
						<option value="">Ishlayotgan bo'lim</option>
						<option value="Nevrologiya">Nevrologiya</option>
						<option value="Travmatologiya">Travmatalogiya</option>
						<option value="Xirurgiya">Xirurgiya</option>
					</select>
					<input type="text" placeholder="Ish grafigi" v-model="doc.worktime">
					<input type="text" placeholder="Ish staji" v-model="doc.staj">
					<input type="date" placeholder="Tug'ilgan sanasi" v-model="doc.docborn">
					<input type="text" placeholder="Oilaviy holat" v-model="doc.docfamily">
					<input type="number" placeholder="Telefon raqam" v-model="doc.doctel">
					<input type="text" placeholder="Tug'ilgan joyi" v-model="doc.docplace">
					<input type="text" placeholder="Ma'lumoti" v-model="doc.docinfo">
					<input type="number" placeholder="Oila a'zolaridan telfon raqami">
					<input type="text" placeholder="Manzil" v-model="doc.docaddress">
				</div>
				<div class="btn">
					<button class="cencel" @click="closeModalDoc">Bekor qilish</button>
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
				doc: {},
				doctor: {}
			}
		},
		methods: {
			closeModalDoc() {
				this.$store.commit('changeModalDoc', false)


			},
			add() {
				this.$store.dispatch('addDoctor', this.doc)
				this.doc = {}

			}
		},
		computed: {
			modalDoc() {
				return this.$store.getters.getModalDoc

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

	.title {
		text-align: center;
	}

	.new {
		margin: auto;
		background-color: #FFFFFF;
		height: 100%;
	}

	.input {
		width: 1200px;
		margin: auto;

	}

	.input input {
		width: 268px;
		height: 32px;
		border-radius: 10px;
		margin-top: 18px;
		background: #FDFDFD;
		border: 1px solid #BBBBBB;
		padding-left: 14px;
		margin-right: 20px;
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
		margin-right: 20px;
	}

	.sel:focus {
		outline: 0;
	}

	.btn {
		margin-left: 33px;
		justify-content: center;
		display: flex;
		margin-top: 20px;
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