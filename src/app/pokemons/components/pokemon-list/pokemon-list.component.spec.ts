import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { SimplePokemon } from '../../interfaces';
import { provideRouter } from '@angular/router';

const mockPokemonList: SimplePokemon[] = [
  { id: '4', name: 'Charmander' },
  { id: '25', name: 'Pikachu' },
  { id: '1', name: 'Bulbasaur' },
  { id: '151', name: 'Mew' },
];

describe('PokemonListComponent', () => {
  let fixture: ComponentFixture<PokemonListComponent>;
  let compiled: HTMLElement;
  let component: PokemonListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the pokemon list with the length of mockPokemonList', () => {
    fixture.componentRef.setInput('pokemons', mockPokemonList);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('pokemon-card').length).toBe(mockPokemonList.length);
  });

  it('should render "No hay pokémons"', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();
    expect(compiled.querySelector('.h-28')?.textContent).toContain('No hay pokémons');
  });

});
