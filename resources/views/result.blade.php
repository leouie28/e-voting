<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donwload result as pdf</title>
  <style>
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
      background-color: #1976d2;
      color: white;
    }
  </style>
</head>

<body>
  <h1 style="text-align: center;">{{$data->name}} Result</h1>
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
</body>

</html>