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
  originalSuggestions = ['ايش فيه مطاعم حولي؟', 'ابغى اطلب من شاورمر', 'واحد تويستر من كنتاكي', 'مشتهي برقر وش تنصح؟', 'وش صار على الطلب؟', 'وريني آخر العروض'];
  suggestions: Array<string> = this.originalSuggestions;
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

  displaySuggestion(suggestion: string) {
    this.suggestions = [suggestion]
    this.state = 'show';
  }

  hideSuggestions() {
    this.state = '*';
  }

  showSuggestions() {
    this.suggestions = this.originalSuggestions;
    this.state = 'show';
  }

}
