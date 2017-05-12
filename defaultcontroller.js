angular.module("app").controller("defaultcontroller", function ($location) {
    var vm = this;
    vm.getProductListing = getProductListing;
    function getProductListing() {
        var products = [{id:1, name: '2013 Nissan Altima', description: '2.5 S SEDAN 4 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99720627&width=160' }, {id:2, name: '2009 TOYOTA VENZA', description: 'Wagon 4 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99800203&width=160' }, {id:3, name: '2011 HONDA CIVIC', description: 'LX AT Couple 2 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=100103390&width=160' },
        {id:1, name: '2013 Nissan Altima', description: '2.5 S SEDAN 4 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99720627&width=160' }, { id:2,name: '2009 TOYOTA VENZA', description: 'Wagon 4 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99800203&width=160' }, {id:3, name: '2011 HONDA CIVIC', description: 'LX AT Couple 2 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=100103390&width=160' },
        {id:1, name: '2013 Nissan Altima', description: '2.5 S SEDAN 4 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99720627&width=160' }, {id:2, name: '2009 TOYOTA VENZA', description: 'Wagon 4 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99800203&width=160' }, {id:3, name: '2011 HONDA CIVIC', description: 'LX AT Couple 2 Door', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=100103390&width=160' }
        ]
        vm.products = products;
    }
    getProductListing();
    vm.LoadDetail = LoadDetail;
    function LoadDetail(id) {
        switch (id) {
            case 1:
                vm.productdetail = {fullname:'2013 Nissan Altima', make: 'Nissan', model: 'ALTIMA 2.5 S', Year: '2013', vehicletype: 'Sedan', transmission: 'Automatic', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99720627&width=160', Mileage: '103842', Drivetrain: 'FWD' }
            case 2:
                vm.productdetail = {fullname:'2009 TOYOTA VENZA', make: 'TOYOTA', model: 'VENZA', Year: '2009', vehicletype: 'Hatchback', transmission: 'Manual', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99800203&width=160', Mileage: '103842', Drivetrain: '2WD' }
            case 3:
                vm.productdetail = {fullname:'2011 HONDA CIVIC', make: 'HONDA', model: 'CIVIC LX AT', Year: '2011', vehicletype: 'Sedan', transmission: 'Automatic', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=100103390&width=160', Mileage: '80120', Drivetrain: 'FWD' }
            default:
                vm.productdetail = { fullname: '2013 Nissan Altima', make: 'Nissan', model: 'ALTIMA 2.5 S', Year: '2013', vehicletype: 'Sedan', transmission: 'Automatic', url: 'http://www.bidgolive.com/Auctions/image.ashx?picid=99720627&width=160', Mileage: '103842', Drivetrain: 'FWD' }

        }
        $location.path('/detail');

    }
    
});
