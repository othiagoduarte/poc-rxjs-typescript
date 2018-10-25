import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { TodoService } from './services/todo.service';


console.log('new TodoService()', new TodoService())
var subject = new Subject();
var subscription = subject.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`Error message: ${err}`),
    () => console.log('Completed!')
)

subject.next(55);
subject.next(34);
subject.next(34);

subject.complete();