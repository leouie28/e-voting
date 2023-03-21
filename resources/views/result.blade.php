<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donwload result as pdf</title>
  <style>
    @font-face {
      font-family: 'ckc';
      src: url({{storage_path('fonts/font1/UnifrakturMaguntia-Regular.ttf')}}) format("truetype");
    }
    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    #customers td,
    #customers th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    #customers tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    #customers tr:hover {
      background-color: #ddd;
    }

    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #5D4037;
      color: white;
    }
    .logo {
      max-width: 100px;
      max-height: 100px;
    }
    .pdf-header {
      display: flex;
      justify-content: space-between !important;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 3px solid #5D4037;
    }
    .c-font {
      font-family: 'ckc', cursive !important;
      font-size: 22px;
    }
    #header{
      position: fixed;
      top: -140px;
      width: 100%;
    }
    @page {
      margin-top: 160px;
    }
  </style>
</head>

<body>
  <!-- <h1 style="text-align: center;">{{$data->name}} Result</h1> -->
  <div id="header">
    <div class="pdf-header">
      <img style="float:left;" class="logo" src="{{ public_path('/images/system/logo.png') }}" alt="Schoool logo">
      <img style="float:right;" class="logo" src="{{ public_path('/images/system/logo2.png') }}" alt="Schoool logo">
      <div style="text-align: center; margin-right:auto; margin-left:auto; margin-top:20px;">
        <span class="c-font">Christ the King College</span><br>
        <span style="font-weight: bold;">Commission on Elections</span><br>
        <span style="font-weight: bold;">Calbayog City, Samar</span>
      </div>
    </div>
  </div>
  <div id="body">
    <div style="text-align: center;">
      <span style="font-size: 24px; font-weight: bold;">{{$data->name}}</span>
    </div>
    <table id="customers">
      <tr>
        <th>Candidate</th>
        <th>Position</th>
        <th>Party Group</th>
        <th>Votes</th>
      </tr>
      @if(count($data->positions))
        @foreach($data->positions as $position)
          @foreach($position->candidate as $cand)
          <tr>
            <td>{{$cand->name}}</td>
            <td>{{$position->name}}</td>
            <td>{{$cand->party_list}}</td>
            <td>{{$cand->vote_count}}</td>
          </tr>
          @endforeach
        @endforeach
      @else
      <tr>
        <td colspan="10" style="text-align:center;">No record</td>
      </tr>
      @endif
    </table>
    <div style="margin-top: 200px; margin-bottom: 50px">
      <div style="float:left; margin-top:20px;">
        <span style="border-top: 1px solid black; font-weight:bold; font-size:16px; padding-top:2px;">
          Chairman, CKC Commission on Elections
        </span>
      </div>
      <div style="float:right; text-align:center;">
        <span style="font-weight:bold; text-align:center;">
          Carl Jamie Simple S. Bordeos, MAEd
        </span><br>
        <span style="border-top: 1px solid black; font-size:16px; padding-top:2px;">
          Leadership Development Program Officer Adviser,
        </span><br>
        <span style="font-size:16px;">
          Collegiate Supreme Student Council
        </span>
      </div>
    </div>
  </div>
</body>

</html>