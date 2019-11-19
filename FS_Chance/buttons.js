        var weapon = $('#weapon');
        var armor = $('#armor');
        var accessory = $('#accessory');
        var mount = $('#mount');

        $(document).ready(() => {
            $(weapon).click(() => {
                $(armor).removeClass("user-selected");
                $(accessory).removeClass("user-selected");
                $(mount).removeClass("user-selected");
                
                $('#item-type').text('Item type: weapon')
                $(weapon).addClass("user-selected");
            });
        });
        $(document).ready(() => {
            $(armor).click(() => {
                $(weapon).removeClass("user-selected");
                $(accessory).removeClass("user-selected");
                $(mount).removeClass("user-selected");
                
                $('#item-type').text('Item type: armor')
                $(armor).addClass("user-selected");
            });
        });
        $(document).ready(() => {
            $(accessory).click(() => {
                $(armor).removeClass("user-selected");
                $(weapon).removeClass("user-selected");
                $(mount).removeClass("user-selected");
                
                $('#item-type').text('Item type: accessory')
                $(accessory).addClass("user-selected");
            });
        });
        $(document).ready(() => {
            $(mount).click(() => {
                $(armor).removeClass("user-selected");
                $(accessory).removeClass("user-selected");
                $(weapon).removeClass("user-selected");
                
                $('#item-type').text('Item type: mount')
                $(mount).addClass("user-selected");
            });
        });
        
        var white = $('#white');
        var green = $('#green');
        var blue = $('#blue');
        var gold = $('#gold');
        var orange = $('#orange');
        
        $(document).ready(() => {
            $(white).click(() => {
                $(green).removeClass("user-selected");
                $(blue).removeClass("user-selected");
                $(gold).removeClass("user-selected");
                $(orange).removeClass("user-selected");
                
                $('#item-grade').text('Item type: white')
                $(white).addClass("user-selected");
            });
        });
        $(document).ready(() => {
            $(green).click(() => {
                $(white).removeClass("user-selected");
                $(blue).removeClass("user-selected");
                $(gold).removeClass("user-selected");
                $(orange).removeClass("user-selected");
                
                $('#item-grade').text('Item type: green')
                $(green).addClass("user-selected");
            });
        });
        $(document).ready(() => {
            $(blue).click(() => {
                $(white).removeClass("user-selected");
                $(green).removeClass("user-selected");
                $(gold).removeClass("user-selected");
                $(orange).removeClass("user-selected");
                
                $('#item-grade').text('Item type: blue')
                $(blue).addClass("user-selected");
            });
        });
        $(document).ready(() => {
            $(gold).click(() => {
                $(white).removeClass("user-selected");
                $(blue).removeClass("user-selected");
                $(green).removeClass("user-selected");
                $(orange).removeClass("user-selected");
                
                $('#item-grade').text('Item type: gold')
                $(gold).addClass("user-selected");
            });
        });
        $(document).ready(() => {
            $(orange).click(() => {
                $(white).removeClass("user-selected");
                $(blue).removeClass("user-selected");
                $(gold).removeClass("user-selected");
                $(green).removeClass("user-selected");
                
                $('#item-grade').text('Item type: orange')
                $(orange).addClass("user-selected");
            });
        });