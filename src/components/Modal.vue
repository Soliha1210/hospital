<template>
	<div>
		<div class="modal" v-show="modal" v-on:keypress.enter="add">
			<div class="new">
				<div class="title">
		
					Registrate new patient
				</div>
				<div class="input">
					<input type="text" placeholder="Name Surename" v-model="obj.name">
					<input type="text" placeholder="email" v-model="obj.email">
					<input type="number" placeholder="Telephone number" v-model="obj.number">
					<input type="date" placeholder="Date of visit" v-model="obj.date">
					<input type="text" placeholder="Photo url" v-model="obj.pic">
					<select class="sel" v-model="obj.doc">
						<option value="">The name of doctor</option>
						<option value="Neurologist">Neurologist</option>
						<option value="Lor"></option>
						<option value="Therapeutis">Therapeutis</option>
					</select>
					<select class="sel" v-model="obj.reason">
						<option value=""></option>
						<option value="Asabiylik">Nervousness</option>
						<option value="Laringit">Laryngitis</option>
					</select>
					<input type="date" placeholder="Date of discharge " v-model="obj.exit">
					<select class="sel" v-model="obj.docname">
						<option value="Lazizov Odilbek">Lazizov Odilbek</option>
						<option value="Mamajonova Soliha">Mamajonova Soliha</option>
					</select>
					<input type="text" placeholder="Treatment section" v-model="obj.section">
					<input type="textarea" placeholder="The reason of addressing" v-model="obj.reas">
					<input type="date" placeholder="Date of birth" v-model="obj.born">
					<input type="text" placeholder="Family status" v-model="obj.family">
					<input type="number" placeholder="Telephon number" v-model="obj.tel">
					<input type="text" placeholder="Place of birth" v-model="obj.place">
					<input type="text" placeholder="Information" v-model="obj.info">
					<input type="text" placeholder="Address" v-model="obj.address">
					<select class="sel" v-model="obj.busy">
						<option value="It works">It works</option>
						<option value="It doesn't work">It doesn't work</option>
					</select>
					<input type="text" placeholder="Ish joyi" v-model="obj.work">
					<select class="sel" v-model="obj.blood">
						<option value="blood group">Blood group</option>
						<option value="I guruh">I group</option>
						<option value="II guruh">II group</option>
						<option value="III guruh">III group</option>
						<option value="IV guruh">IV group</option>
					</select>
					<input type="text" placeholder="Privilege category" v-model="obj.privilege">

				</div>
				<div class="btn">
					<button class="cencel" @click="closeModal">Cencel</button>
					<button class="add" @click="add">Add</button>
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