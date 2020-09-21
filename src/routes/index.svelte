<script context="module">
	import requests from "../data/requests.js";
	export async function preload() {
		const customerData = await requests.customerData();
		console.log(customerData);
		return { customerData };
	}
  </script>
  
  <script>
	import TableContainer from "../components/TableContainer.svelte";
	import InputMessage from "../components/InputMessage.svelte";
	import SMSContainer from "../components/SMSContainer.svelte";

	export let customerData;
	export let filterSettings;
	export let message;

	console.log("index");
	console.log(customerData);
  </script>
  
  <svelte:head>
	<title>Walleye Demo</title>
  </svelte:head>
  
  <div class="section header">
	<div class="container">
	  <h1>Walleye Demo</h1>
	</div>
  </div>
  
  <TableContainer data={customerData} bind:filterSettings/>
  <InputMessage bind:message />
  <SMSContainer {filterSettings} {message} {customerData}/>