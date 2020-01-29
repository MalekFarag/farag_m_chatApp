// the export statement means that everything inside the curly braces 
// will be made public when you import this file into another via the import statement

export default {
    props: ['msg'],
    template: `
    <li class='messages'>
    <p class='new=message'>
        <span>{{msg.message.name}}:</span><br>
        {{msg.message.content}}
    </p>
    </li>
    `,

    data: function(){
        return { message: 'hello from template'};
    }
}