function PhoneListCtrl($scope) {
  $scope.phones = [
    {name: "Nexus S",
     snippet: "Fast just got faster with Nexus S."},
    {name: "Motorola XOOM™ with Wi-Fi",
     snippet: "The Next, Next Generation tablet."},
    {name: "MOTOROLA XOOM™",
     snippet: "The Next, Next Generation tablet."},
    {name: "MEIZU MX2",
     snippet: "The Next, MEIZU MX2 is very good"}
  ];
}

function PhoneNameCtrl($scope){
  $scope.phone={name: "MEIZU MX2", snippet: "The Next, MEIZU MX2 is very good"};
}
