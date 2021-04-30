<template>
	<div class="info">
		<div class="row">
			<div class="col-3">
				<div class="info_item">
					<div class="photo">
						<img src="../assets/img/med.png" alt="">
					</div>
					<div class="patient">
						<div class="text2">Hodimlar</div>
						<div class="number">
							{{countDoc}}
						</div>
					</div>
				</div>

			</div>
			<div class="col-3">
				<div class="info_item">
					<div class="photo">
						<img src="../assets/img/patient.png" alt="">
					</div>
					<div class="patient">
						<div class="text2">Bemorlar</div>
						<div class="number">
							{{count}}
						</div>
					</div>
				</div>

			</div>
			<div class="col-3">
				<div class="info_item">
					<div class="photo">
						<img src="../assets/img/room.png" alt="">
					</div>
					<div class="patient">
						<div class="text2">Xonalar</div>
						<div class="number">
							24
						</div>
					</div>
				</div>
			</div>
			<div class="col-3">
				<div class="info_item">
					<div class="photo">
						<img src="../assets/img/budjet.png" alt="">
					</div>
					<div class="patient">
						<div class="text2">Byudjet</div>
						<div class="number">
							$ 12,174
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		data(){
			return{
				count:0,
				countDoc:0
			}
		},
		created(){
			axios.get('  http://localhost:3000/obj').then(response=>{this.count=response.data.length})
			axios.get('  http://localhost:3000/doc').then(response=>{this.countDoc=response.data.length})

		}
	}
</script>

<style>
	.row {
		display: flex;
	}

	.col-3 {
		flex-basis: 25%;
		padding: 30px;
	}

	.info_item {
		background-color: #FFFFFF;
		border-radius: 8px;
		box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
		height: 88px;
		display: flex;

	}

	.photo {
		padding-left: 24px;
		padding-top: 26px;
	}

	.patient {
		padding-top: 20px;
		padding-left: 24px;

	}

	.text2 {
		font-size: 14px;
		font-family: 'lb';
		color: black;
	}

	.number {
		padding-top: 9px;
		font-size: 18px;
		color: #336CFB;
	}
</style>