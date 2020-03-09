module.exports = {
    elements : {
        
        
        store_locator_container: {
            selector : 'div.store-locator-container',
            // selector : 'div.bwt-search-results-container'  //updated the locator as the scenario in global_header.feature failed --**
        },

        store_locator_check_stores_button:{
            selector : 'button.btn-storelocator-search',
        },

        store_locator_postal_code_textbox:{
            selector : 'input#store-postal-code',
            //selector : 'div.bwt-index-search-form-container input#bwt-q'  //updated the locator as it is incorrectly mapped  --**
        },
      
        breadcrumb_current_page: {
            selector : 'ol.breadcrumb span.last-item',
        },

        breadcrumb_links:{
            selector: 'div.hidden-sm-down ol.breadcrumb a',
        },

        breadcrumb_last_link:{
            selector:'div.hidden-md-down ol.breadcrumb li.breadcrumb-item:nth-last-child(2) a',
            //selector:'div.hidden-sm-down ol.breadcrumb li.breadcrumb-item:nth-of-type(3) a',
        },
        



        

    }

}