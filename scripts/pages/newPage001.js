/* 
		You can modify its contents.
*/
const Page = require("sf-core/ui/page");
const Color = require('sf-core/ui/color');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const Label = require('sf-core/ui/label');
const FlexLayout = require('sf-core/ui/flexlayout');
const Router = require("sf-core/ui/router");

const extend = require('js-base/core/extend');
const NewPage001Design = require('ui/ui_newPage001');
var  Page1 = extend(Page)(
    function(_super) {
        _super(this, {
            onShow: function(params) {
                this.statusBar.visible = false;
                this.headerBar.visible = false;
            }
        });
        this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
        this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
        this.layout.alignItems = FlexLayout.AlignItems.CENTER;
        
 
        var myDataSet = [{
            title: 'Smartface Title 1',
            backgroundColor: Color.create("#99d9f9")
        }, {
            title: 'Smartface Title 2',
            backgroundColor: Color.create("#66c6f6")
        }, {
            title: 'Smartface Title 3',
            backgroundColor: Color.create("#32b3f3")
        }, {
            title: 'Smartface Title 4',
            backgroundColor:Color.create("#00a1f1")
        }];

        var myListView = new ListView({
            height:240,
            rowHeight: 60,
            backgroundColor: Color.LIGHTGRAY,
            itemCount: myDataSet.length,
        });

        this.layout.addChild(myListView);
            

        myListView.onRowCreate = function() {
            var myListViewItem = new ListViewItem();
            var myLabelTitle = new Label({
                id: 102,
                height: 40,
                width: 150,
                alignSelf: FlexLayout.AlignSelf.CENTER
            });
            myListViewItem.addChild(myLabelTitle);
            return myListViewItem;
        };
        myListView.onRowBind = function(listViewItem, index) {
            var myLabelTitle = listViewItem.findChildById(102);
            myLabelTitle.text = myDataSet[index].title;
            myLabelTitle.backgroundColor = myDataSet[index].backgroundColor;
        };
        myListView.onRowSelected = function(listViewItem, index) {
            console.log("selected index = " + index)
        };

        myListView.onPullRefresh = function() {
            myDataSet.push({
                title: 'Smartface Title ' + (myDataSet.length+1),
                backgroundColor: Color.YELLOW,
                color: Color.GREEN,
            })
            myListView.itemCount = myDataSet.length;
            myListView.refreshData();
            myListView.stopRefresh();
        }
    }
);
module.exports = Page1;