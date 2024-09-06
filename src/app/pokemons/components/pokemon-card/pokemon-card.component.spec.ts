import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { provideRouter } from '@angular/router';
import { SimplePokemon } from '../../interfaces';

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'Charmander',
}

describe('PokemonCardComponent', () => {

  let fixture: ComponentFixture<PokemonCardComponent>;
  let compiled: HTMLElement;
  let component: PokemonCardComponent

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);

    fixture.componentRef.setInput('pokemon', mockPokemon);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the PokemonCardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon signal inputValue', () => {
    //? .toEqual() es el recomendado para cuando evaluemos objetos, por encima del .toBe() :
    expect(component.pokemon()).toEqual(mockPokemon);
  });

  it('should render the pokemon name and image correctly', () => {

    const h2ElementInnerText = compiled.querySelector('h2')?.innerText;
    expect(h2ElementInnerText).toBe(mockPokemon.name);

    const image = compiled.querySelector('img')!;
    //? Es buena práctica que cuando forcemos la existencia con !, comprobar que en realidad sí exista:
    expect(image).toBeDefined();
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ mockPokemon.id }.png`;
    expect(image.src).toBe(imageUrl);


  });

  it('should have the proper ng-reflect-router-link', () => {
    const routerLinkProper = compiled.querySelector('div')?.getAttribute('ng-reflect-router-link');
    console.log({routerLinkProper});
    expect(routerLinkProper).toBe(`/pokemons,${mockPokemon.name}`);
  });


});
