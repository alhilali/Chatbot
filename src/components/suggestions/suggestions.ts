import {
  Component, Output, EventEmitter,
  trigger, state, style, animate, transition
} from '@angular/core';

/**
 * Generated class for the SuggestionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'suggestions',
  templateUrl: 'suggestions.html',
  animations: [
    trigger('fadeInOut', [
      state('*', style({ opacity: '0' })),
      state('show', style({ opacity: '1' })),
      transition('show <=> *', animate('300ms ease-in'))
    ])
  ]
})
export class SuggestionsComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  suggestions: Array<string> = ['ايش فيه مطاعم حولي؟', 'ابغى اطلب من كنتاكي', 'وريني آخر العروض'];
  state: string = '*';

  constructor() {
    console.log('Hello SuggestionsComponent Component');
    setTimeout(() => {
      this.state = 'show'
    }, 2000);

  }

  pickSuggestion(suggestion: string) {
    this.state = '*';
    this.notify.emit(suggestion);
  }

}
