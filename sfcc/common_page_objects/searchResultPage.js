module.exports = {
    elements : {
             
        //*******PRODUCT TILE STARTED */
        search_result_page_product_tile :{
            // selector:'div.product-grid div.col-6:nth-of-type(2) div.product-tile a.thumb-link',
            selector:'div.col-6.col-sm-4 a.thumb-link', 
        },


        search_result_page_add_to_cart_button:{
             // selector: 'div.product-grid div.col-6:nth-of-type(2) div.product-tile button.add-to-cart',
             selector: 'div.col-6.col-sm-4 button.add-to-cart',
        },
        
        search_result_page_size_links:{
            selector: 'div.product-grid div.col-6:nth-of-type(2) div.product-tile a.sizeSwatch',
        },

        search_result_page_product_name_link : {
            // selector : 'div.product-grid div.col-6:nth-of-type(2) div.product-tile div.pdp-link a.link',
            selector : 'div.col-6.col-sm-4 div.pdp-link a.link',
        },

        search_result_page_product_selected_size:{
            selector:'div.product-grid div.col-6:nth-of-type(2) div.size a.selected span.size-container',
        },

        search_result_page_sales_price:{
            selector:'div.pdp-link+span.prod-price>span:not(.range) span.sales span.value',
            // selector:"//div[@class='pdp-link']/following-sibling::span[@class='prod-price']//span[@class='price']/parent::span[not(contains(@class, 'range'))]",
            // locateStrategy:'xpath',
        },

        search_result_page_product_link:{
            selector:'div.product-grid div.product-tile a.thumb-link',
        },


        
// ##################SORT BY OPTION

sortby_selectbox:{
    selector:"div.refinement-bar select[name='sort-order']",
},

sortby_dropdown:{
    selector:'div.selected-option',
},

sortby_dropdown_selected:{
    selector:'div.selected-option.selected',
},

sortby_price_low_to_high:{
    selector:'ul li.price-low-to-high',
},

sortby_price_high_to_low:{
    selector:'li.price-high-to-low',
},

sortby_top_sellers:{
    selector:'li.top-sellers',
},


sortby_sale_first:{
    selector:'li.sale-first',
},

sortby_newest:{
    selector:'li.newest',
},





// ################## QUICKVIEW 
        search_result_page_quickview_link:{
            selector: 'a.quickview',
        },

        search_result_page_quickview_view_details_link:{
            selector:'a.view-full-product-info',
        },


        search_result_page_quickview_modal:{
            selector:'div#quickViewModal',
        },

        search_result_page_quickview_popup:{
            selector:'div.quickview_container',
        },

        search_result_page_quickview_close_icon:{
            selector:'span.quickview-close',
        },

        search_result_page_quickview_addtocart_button:{
            selector:'button.add-to-cart-global',
        },

        search_result_page_more_color_swatch_link:{
            selector:'div.color-swatches span.plus_icon a',
        },


// ################## QUICKVIEW POPUP
        search_result_page_selected_size_in_quick_view:{
            selector:"ul.size-attribute li[selected='selected']",
        },

        search_result_page_selectable_size_in_quickview:{
            selector:'ul.size-attribute li a',
        },



        //*******PRODUCT TILE ENDED*/
        
        search_result_page_search_keyword:{
            selector:'span.search-keywords',
        },
           
        search_result_page_breadcrumb:{
            selector:'ol.breadcrumb',
        },

        search_result_page_did_you_mean_link:{
            selector:'div.search-word-recom a.link',
        },

        search_result_page_recommended_search_text: {
            selector : 'div.search-word-recom span',
        },       

        search_result_total_product_count:{
            selector:'div.search-result-content span.search-count',
        },

        search_keyword_recommendation_section :{
            selector : 'div.search-word-recom',
        },
        

        search_result_content:{
            selector:'div#product-search-results',
        },

        search_product_grid_section:{
            selector:'div.product-grid',
        },
        
        

     

        back_to_top_active_button : {
            selector : 'button.back-to-top.active',
        },

        first_link_in_breadcrumb : {
            selector : 'ol.breadcrumb>li>a',
        },
// ************* REFINEMENT CATEGORY SECTION *************
        search_result_page_category_expanded : {
            selector : "div[class*='refinement-category active'] h2",
        },

        search_result_page_category_collapsed : {
            selector : "div[class*='refinement-category'] h2[aria-expanded=false]",
        },

        search_result_page_refinement_category_heading : {
            selector : 'div.refinement-category h2',
        },

        search_result_page_refinement_color_heading:{
            selector: 'div.refinement-color h2',
        },

        search_result_page_refinement_size_heading:{
            selector: 'div.refinement-size h2',
        },

        search_result_page_refinement_brand_heading:{
            selector: 'div.refinement-brand h2',
        },

        search_result_page_refinement_price_heading:{
            selector: 'div.refinement-price h2',
        },

        search_result_page_refinement_price_expanded:{
            selector:'div.refinement-price.active',
        },

        search_result_page_color_filter_list:{
            selector: 'div#refinement-color ul.values',
        },

        search_result_page_expanded_refinement_filter:{
            selector:"div[class*='refinement-price active'] h2",
        },

        search_result_page_price_range_link :{
            selector: 'div.refinement-price ul.values button',
        },

        search_result_page_price_range_value: {
            // selector : 'div.refinement-price ul.values i.fa-circle-o+span',
            // selector:"div.refinement-price ul.values button span[aria-hidden='true']",
            selector:'div.refinement-price ul.values button span:nth-of-type(1)',
        },

        search_result_page_promotion_filter_heading:{
            //selector:'div.refinement-available-promotions h2',
            selector:'div.refinement-promotion h2',
        },

        search_result_page_available_promotions_refinement_list:{
            selector : 'div#refinement-available-promotions ul.values',
        },

        search_result_page_promotion_link:{
            selector: 'div#refinement-available-promotions ul.values button',
        },

        search_result_page_promotion_name:{
            selector:'div#refinement-available-promotions ul.values button span',
        },

        search_result_page_designer_filter:{
            selector:'div.refinement-designer h2'
        },
        search_result_page_designer_filter_search_box:{
            selector:"input[name='search_refinement_value']",
        },

         search_result_page_designer_filter_search_icon:{
             selector:'div#refinement-designer button.search-icon',
         },

        search_result_page_designer_filter_search_result:{
            selector:'div#refinement-designer ul.with-search li:not(.d-none) span.value',
        },


        

// **************************

        search_result_page_products_link:{
            selector: 'a.thumb-link',
        },


        search_result_page_product_image :{
            selector : "div.product-grid a.thumb-link img.tile-image",
        },

        search_result_page_product_breand : {
            selector : 'a.product-brand',
        },

        
        

        search_result_page_product_price : {
            selector : 'span.price span.sales span.value',
        },

        search_result_page_product_ratings :{
            selector : 'div.ratings',
        },


        search_result_page_category_swatch : {
            // selector : 'div#refinement-category li.catgories-values button',
            selector : 'div#refinement-category li.catgories-values a',
        },

        search_result_page_category_title : {
             // selector : 'div#refinement-category li.catgories-values button span:first-child',
             selector : 'div#refinement-category li.catgories-values a span:first-child',
        },

        search_result_page_color_swatch : {
            selector : 'div.refinement-color li.color-attribute a',
        },

        search_result_page_color_title : {
            selector : 'div.refinement-color li.color-attribute span.color-value',
        },

        search_result_page_color_swatch_selected :{
            selector : 'div.refinement-color li.color-attribute span.selected',
        },

        search_result_page_price_swatch_selected :{
            selector : 'div#refinement-price li.adobelaunch__subnav i.selected',
        },



        search_result_page_selected_filter_section : {
            selector : 'div.filter-bar',
        },


        search_result_page_selected_filter_link:{
            selector : 'div.filter-bar li.filter-value button',
        },

        search_result_page_selected_filters:{
            selector:'div.filter-bar ul',
            // selector:'div.filter-bar ul button span:first-child',
        },

        search_result_page_clearall_link : {
            selector : 'li.clear-refinement button',
        },

        search_result_page_price_filter_error_form: {
            selector : 'form.price-select input.form-control.error.validdata',
        },

        search_result_page_minimum_price_box :{
            selector:'input#min-input',
        },

        search_result_page_maximum_price_box: {
            selector: 'input#max-input',
        },



        search_result_page_price_refinement_go_button:{
            selector:'div#refinement-price button.go-price',
        },

        search_result_page_product_wishlist_icon : {
            selector : 'a.select-wishlist',
        },
        
        search_result_page_wishlist_icon_selected:{
            selector :'div.product-tile span.svg-svg-96-heart-blue',
        },


        search_result_product_added_to_your_wishlist:{
            selector: 'div.wishlist_checked span.prod-added',
        },

        search_result_want_to_save_your_wishlist:{
            selector:'div.wishlist_checked span.save-wishlist',
        },

        search_result_signin_link:{
            selector:'div.wishlist_checked a.plp-wish-signin',
        },

        search_result_page_view_wishlist_button:{
            selector: 'div.wishlist_checked a.view-btn',
        },

        search_result_brandName:{
            selector: 'a.product-brand',
        },

        no_search_result:{
            selector: 'span.search-no-result',
        },






        
        





        

             
        

        
        

    }

}