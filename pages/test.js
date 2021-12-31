import { BeakerIcon, ChatIcon } from '@heroicons/react/outline'


export default function Test() {
  return (
    <div>
        <BeakerIcon style={{
            width: '30px',
            height: '30px',
            color: 'red'
        }} />
        <ChatIcon style={{
            width: '30px',
            height: '30px',
            color: 'red'
        }} />
        <table class="table-auto border text-center">
            <thead>
                <tr>
                    <th class="border w-1/2">Title</th>
                    <th class="border">Author</th>
                    <th class="border">Views</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border">Intro to CSS</td>
                    <td class="border">Adam</td>
                    <td class="border">858</td>
                </tr>
                <tr>
                    <td class="border">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td class="border">Adam</td>
                    <td class="border">112</td>
                </tr>
                <tr>
                    <td class="border">Intro to JavaScript</td>
                    <td class="border">Chris</td>
                    <td class="border">1,280</td>
                </tr>
            </tbody>
            </table>
    </div>
  )
}
