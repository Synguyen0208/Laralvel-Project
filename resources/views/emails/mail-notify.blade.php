
<body>
   <h2 style="color: blue;">{{ $data['type'] }}</h2>
      <p><b>{{ $data['thanks'] }}</b></p>

   <table border="1">
   <tr>
            <th colspan="9" style="color: red;">THÔNG TIN ĐĂNG KÍ CỦA BẠN</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>Identify Card</th>
            <th>Phone</th>
            <th>Graduation_years</th>
            <th>Address</th>
            <th>Link_facebook</th>
            <th>Major</th>
            <th>Graduation_score</th>
           
        </tr>
        <tr>
            <td>{{ $data['name'] }}</td>
            <td>{{ $data['birtday'] }}</td>
            <td>{{ $data['card'] }}</td>
            <td>{{ $data['phone'] }}</td>
            <td>{{ $data['graduation_years'] }}</td>
            <td>{{ $data['address'] }}</td>
            <td>{{ $data['link_facebook'] }}</td>
            <td>{{ $data['major'] }}</td>
            <td>{{ $data['graduation_score'] }}</td>

        </tr>
    </table>
    <p>{{ $data['content'] }}</p>
</body>
	</div> <!-- .container -->