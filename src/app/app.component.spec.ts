import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
let  appComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    console.log("Before Each");
    appComponent = new AppComponent();
  }));
  afterEach(()=>{
    console.log("After Each");
  })
  beforeAll(()=>{
    console.log("Eject All after finalize the test");
  })
  afterAll(()=>{
    console.log("Eject All before start the test");
  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('The value of myVar should be Hello world',()=>{
    const valueVar = appComponent.myVar;
    expect(valueVar).toEqual('Hello World'); 
  })
  it('The Variable gretting must contain Alejo',()=>{
    const valueVar = appComponent.gretting
    expect(valueVar).toContain('Alejo');
  })
  it('Must return TRUE value',()=>{
    const response = appComponent.pair(44);
    expect(response).toBeTruthy();
  })
  it('Must return FALSE value',()=>{
    const response = appComponent.pair(45);
    expect(response).toBeFalsy();
  })
});
