<script lang="ts">
    import EverythingList from "$lib/ui/EverythingList.svelte";
    //import AddHotelListForm from "./AddHotelListForm.svelte";
    import ListHotelLists from "$lib/ui/ListHotelLists.svelte";
    import ListHotels from "$lib/ui/ListHotels.svelte";
    import AddHotelForm from "./AddHotelForm.svelte";
    import { subTitle } from "$lib/stores";
    
    export let data: any;
    subTitle.set(data.hotelList.title);
    

    
</script>

<section class="section">
    <div class="title">
      {data.hotelList.title}
    </div>

    <ListHotels hotels={data.hotels} hotelList={data.hotelList}/>

    <AddHotelForm hotelList={data.hotelList}/>
    <!--
    {> list-hotels}
    {> add-hotel}
    {> error}
    {> map-with-search}
    -->
</section>